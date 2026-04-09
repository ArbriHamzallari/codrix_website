import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
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

    if (!businessName) {
      return NextResponse.json({ error: 'Business name is required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Codrix Website <onboarding@resend.dev>',
      to: ['info@codrix.org'],
      subject: `New System Audit Request: ${businessName}`,
      html: `
                <h1>New System Audit Request</h1>
                <p><strong>Business Name:</strong> ${businessName}</p>
                <p><strong>Website:</strong> ${website || 'Not provided'}</p>
                <p><strong>Identified Leakage Channels:</strong></p>
                <ul>
                    ${
                      channels && channels.length > 0
                        ? channels.map((c: string) => `<li>${c}</li>`).join('')
                        : '<li>None selected</li>'
                    }
                </ul>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr />
                <p><em>This lead was captured from the Codrix website.</em></p>
            `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send audit data' }, { status: 500 });
  }
}
