    import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, isAllowedOrigin } from '@/lib/security';
import { getClientIp, hitLimit } from '@/lib/ratelimit';

const MAX_NAME = 200;
const MAX_MESSAGE = 2000;
const EMAIL_WINDOW_SECONDS = 60 * 60;
const EMAIL_MAX_PER_IP = 10;

export async function POST(request: NextRequest) {
    try {
        if (!isAllowedOrigin(request)) {
            console.warn('contact: rejected request from disallowed origin');
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const ip = getClientIp(request);
        const limit = await hitLimit(`contact:ip:${ip}`, EMAIL_MAX_PER_IP, EMAIL_WINDOW_SECONDS);
        if (!limit.allowed) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Check for API key
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
        const { name, email, message } = body;

        // Validate input (server-side — never trust the browser form)
        if (
            typeof name !== 'string' ||
            typeof email !== 'string' ||
            typeof message !== 'string' ||
            !name.trim() ||
            !email.trim() ||
            !message.trim()
        ) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (name.length > MAX_NAME || message.length > MAX_MESSAGE || email.length > MAX_NAME) {
            return NextResponse.json(
                { error: 'One or more fields are too long' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // You'll need to verify a domain with Resend to use your own domain
            to: ['info@codrix.org'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4F6EF7; border-bottom: 2px solid #4F6EF7; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="margin-top: 20px;">
                        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            ${escapeHtml(message).replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p>This email was sent from the Codrix website contact form.</p>
                    </div>
                </div>
            `,
            replyTo: email, // This allows you to reply directly to the sender
        });

        if (error) {
            throw new Error(error.message || 'Failed to send email');
        }

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
