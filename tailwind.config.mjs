/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Editorial redesign palette (2026-08-14) — supersedes the
                // prior dark-navy/blue system and refines the purple ramp's
                // primary stop. Warm off-white base, near-black text, purple
                // as one intentional accent rather than a background glow.
                background: "#F7F5F0",
                foreground: "#17151C",
                muted: "#6E6A76",
                primary: {
                    DEFAULT: "#6D35F2", // Biseda purple
                    deep: "#4F20C9",
                    soft: "#EEE8FF",
                    dim: "rgba(109, 53, 242, 0.10)",
                    hover: "#5B29D6",
                },
                secondary: {
                    DEFAULT: "#2D5BFF",
                },
                accent: {
                    DEFAULT: "#4F20C9",
                    dim: "rgba(79, 32, 201, 0.10)",
                    light: "#EEE8FF",
                    lightest: "#F7F5F0",
                },
                whatsapp: "#25D366",
                // Legacy dark-surface tokens — kept only for DemoLive's
                // WhatsApp-style chat interface, which legitimately stays
                // dark (it's a recreation of a real dark-mode chat app, not
                // a themed page section).
                surface: {
                    DEFAULT: "#0C0F1C",
                    hover: "#121629",
                    border: "#1E2438",
                },
                cream: "#F7F5F0",
                ink: {
                    DEFAULT: "#17151C",
                    muted: "#6E6A76",
                },
                border: {
                    DEFAULT: "rgba(23, 21, 28, 0.12)",
                },
                success: "#22C55E",
                warning: "#FBBF24",
                error: "#EF4444",
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                heading: ['var(--font-instrument-sans)', 'sans-serif'],
                serif: ['var(--font-source-serif)', 'serif'],
                mono: ['var(--font-dm-mono)', 'monospace'],
            },
            backgroundImage: {
                "hero-glow":
                    "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(109, 53, 242, 0.08) 0%, transparent 65%)",
                "section-glow":
                    "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(109, 53, 242, 0.05) 0%, transparent 70%)",
            },
            borderRadius: {
                sm: "0.375rem", // 6px — buttons
                card: "0.625rem", // 10px — product UI
                xl2: "0.75rem",
                xl3: "0.75rem",
                img: "0.25rem", // 4px — photography/collage
            },
            boxShadow: {
                // Restrained — hairline borders do most of the work now;
                // shadow is reserved for the one or two things per page that
                // should read as physically above the surface.
                "hairline": "0 0 0 1px rgba(23, 21, 28, 0.08)",
                "soft": "0 1px 2px rgba(23, 21, 28, 0.04), 0 2px 8px rgba(23, 21, 28, 0.05)",
                "elevated": "0 4px 16px rgba(23, 21, 28, 0.08), 0 1px 2px rgba(23, 21, 28, 0.06)",
                "cta": "0 2px 8px rgba(37, 211, 102, 0.20), 0 6px 20px rgba(37, 211, 102, 0.16)",
                "cta-blue": "0 2px 8px rgba(109, 53, 242, 0.18), 0 6px 20px rgba(109, 53, 242, 0.14)",
            },
            keyframes: {
                "marquee": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "marquee": "marquee 28s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
