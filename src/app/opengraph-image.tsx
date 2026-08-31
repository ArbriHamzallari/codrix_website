import { ImageResponse } from 'next/og';

export const alt = 'Biseda AI — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(1000px 500px at 50% -10%, rgba(91,44,255,0.35), rgba(168,85,247,0.14) 45%, #05060E 75%)',
          backgroundColor: '#05060E',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: '#FFFFFF',
              display: 'flex',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 21,
                height: 21,
                borderRadius: '50%',
                background: '#5B2CFF',
                position: 'absolute',
                left: 5,
                top: 11,
              }}
            />
            <div
              style={{
                width: 21,
                height: 21,
                borderRadius: '50%',
                background: '#A855F7',
                opacity: 0.88,
                position: 'absolute',
                left: 18,
                top: 11,
              }}
            />
          </div>
          <div style={{ display: 'flex', color: 'white', fontSize: 32, fontWeight: 700 }}>
            Biseda <span style={{ color: '#7C3AED' }}>AI</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: 980,
          }}
        >
          Sa klientë humbisni sepse s&apos;keni kohë t&apos;u përgjigjeni?
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ color: '#25D366', fontSize: 28, fontWeight: 700 }}>WhatsApp · Instagram</div>
          <div style={{ color: '#AEB4C7', fontSize: 28 }}>· Përgjigje në 2 sekonda, 24/7</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
