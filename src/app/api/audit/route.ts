import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { escapeHtml, isAllowedOrigin } from '@/lib/security';
import { getClientIp, hitLimit } from '@/lib/ratelimit';

const MAX_BUSINESS_NAME = 200;
const MAX_WEBSITE = 300;
const MAX_CHANNELS = 20;
const MAX_CHANNEL_LEN = 100;
const EMAIL_WINDOW_SECONDS = 60 * 60;
const EMAIL_MAX_PER_IP = 10;

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      console.warn('audit: rejected request from disallowed origin');
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(request);
    const limit = await hitLimit(`audit:ip:${ip}`, EMAIL_MAX_PER_IP, EMAIL_WINDOW_SECONDS);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { businessName, website, channels } = body;

    // Server-side validation — never trust the browser form.
    if (typeof businessName !== 'string' || businessName.trim().length === 0) {
      return NextResponse.json({ error: 'Business name is required' }, { status: 400 });
    }
    if (businessName.length > MAX_BUSINESS_NAME) {
      return NextResponse.json({ error: 'Business name is too long' }, { status: 400 });
    }
    if (website != null && (typeof website !== 'string' || website.length > MAX_WEBSITE)) {
      return NextResponse.json({ error: 'Invalid website' }, { status: 400 });
    }
    if (channels != null && !Array.isArray(channels)) {
      return NextResponse.json({ error: 'Invalid channels' }, { status: 400 });
    }
    const safeChannels: string[] = Array.isArray(channels)
      ? channels
          .filter((c): c is string => typeof c === 'string')
          .slice(0, MAX_CHANNELS)
          .map((c) => c.slice(0, MAX_CHANNEL_LEN))
      : [];

    const { data, error } = await resend.emails.send({
      from: 'Codrix Website <onboarding@resend.dev>',
      to: ['info@codrix.org'],
      subject: `New System Audit Request: ${businessName.slice(0, MAX_BUSINESS_NAME)}`,
      html: `
                <h1>New System Audit Request</h1>
                <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
                <p><strong>Website:</strong> ${website ? escapeHtml(website) : 'Not provided'}</p>
                <p><strong>Identified Leakage Channels:</strong></p>
                <ul>
                    ${
                      safeChannels.length > 0
                        ? safeChannels.map((c) => `<li>${escapeHtml(c)}</li>`).join('')
                        : '<li>None selected</li>'
                    }
                </ul>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr />
                <p><em>This lead was captured from the Codrix website.</em></p>
            `,
    });

    if (error) {
      // Log the provider detail server-side; never return it to the client.
      console.error('audit: Resend error', error);
      return NextResponse.json({ error: 'Failed to send audit data' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send audit data' }, { status: 500 });
  }
}
