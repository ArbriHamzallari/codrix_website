import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// If no key is provided, it will throw an error when trying to send
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { businessName, website, channels, date } = body;

        // Basic validation
        if (!businessName) {
            return NextResponse.json(
                { error: 'Business name is required' },
                { status: 400 }
            );
        }

        // Send email to the owner
        const { data, error } = await resend.emails.send({
            from: 'Codrix Website <onboarding@resend.dev>', // Update this if you have a custom domain
            to: ['info@codrix.org'], // Replace with your actual email if different
            subject: `New System Audit Request: ${businessName}`,
            html: `
                <h1>New System Audit Request</h1>
                <p><strong>Business Name:</strong> ${businessName}</p>
                <p><strong>Website:</strong> ${website || 'Not provided'}</p>
                <p><strong>Identified Leakage Channels:</strong></p>
                <ul>
                    ${channels && channels.length > 0
                    ? channels.map((c: string) => `<li>${c}</li>`).join('')
                    : '<li>None selected</li>'}
                </ul>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr />
                <p><em>This lead was captured from the "Initialize System Audit" panel on the website.</em></p>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send audit data' },
            { status: 500 }
        );
    }
}
