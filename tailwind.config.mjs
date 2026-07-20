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
                background: "#05060E", // deep navy-black
                foreground: "#FFFFFF",
                muted: "#AEB4C7", // secondary text (bumped for 4.5:1 contrast on #05060E)
                primary: {
                    DEFAULT: "#3B6BFF", // trust blue
                    dim: "rgba(59, 107, 255, 0.15)",
                    hover: "#2F56E6",
                },
                secondary: {
                    DEFAULT: "#2D5BFF",
                },
                accent: {
                    DEFAULT: "#7B5CFF", // purple for hero gradients
                    dim: "rgba(123, 92, 255, 0.15)",
                },
                whatsapp: "#25D366",
                surface: {
                    DEFAULT: "#0C0F1C",
                    hover: "#121629",
                    border: "#1E2438",
                },
                success: "#22C55E",
                warning: "#FBBF24",
                error: "#EF4444",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-outfit)', 'sans-serif'],
                mono: ['monospace'],
            },
            backgroundImage: {
                "hero-glow":
                    "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(123, 92, 255, 0.25) 0%, rgba(59, 107, 255, 0.10) 45%, transparent 70%)",
                "section-glow":
                    "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59, 107, 255, 0.10) 0%, transparent 70%)",
                "grid-pattern": "linear-gradient(to right, #1E2438 1px, transparent 1px), linear-gradient(to bottom, #1E2438 1px, transparent 1px)",
                "glow-subtle": "radial-gradient(circle at center, rgba(59, 107, 255, 0.08) 0%, transparent 70%)",
            },
            borderRadius: {
                card: "1rem",
                xl2: "1.25rem",
                xl3: "1.5rem",
            },
            boxShadow: {
                // Layered/diffused, respond.io-style — never one harsh shadow
                "soft": "0 1px 2px rgba(0,0,0,0.20), 0 4px 12px rgba(0,0,0,0.24)",
                "soft-lg": "0 2px 4px rgba(0,0,0,0.20), 0 12px 32px rgba(0,0,0,0.34)",
                "card": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 2px 6px rgba(0,0,0,0.22), 0 16px 40px rgba(0,0,0,0.36)",
                "elevated": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 24px rgba(0,0,0,0.40), 0 24px 64px rgba(0,0,0,0.44)",
                "cta": "0 2px 8px rgba(37, 211, 102, 0.24), 0 8px 28px rgba(37, 211, 102, 0.22)",
                "cta-blue": "0 2px 8px rgba(59, 107, 255, 0.24), 0 8px 28px rgba(59, 107, 255, 0.28)",
                "glow": "0 0 24px rgba(59, 107, 255, 0.16)",
                "sharp": "0 0 0 1px #1E2438",
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
