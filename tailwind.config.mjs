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
                muted: "#9BA3B8", // secondary text
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
            boxShadow: {
                "card": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.35)",
                "cta": "0 4px 24px rgba(59, 107, 255, 0.35)",
                "glow": "0 0 20px rgba(59, 107, 255, 0.15)",
                "sharp": "0 0 0 1px #1E2438",
            }
        },
    },
    plugins: [],
};
export default config;
