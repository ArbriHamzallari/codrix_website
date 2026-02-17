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
                background: "#050505", // Near black
                foreground: "#FFFFFF",
                primary: {
                    DEFAULT: "#00F0FF", // Neon Cyan
                    dim: "rgba(0, 240, 255, 0.2)",
                    hover: "#00C2CC",
                },
                secondary: {
                    DEFAULT: "#2D5BFF", // Electric Blue
                },
                surface: {
                    DEFAULT: "#0F1115", // Module background
                    hover: "#15181E",
                    border: "#2A2F3A",
                },
                success: "#00FF94", // For value/money metrics
                warning: "#FFD600",
                error: "#FF2E2E",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                mono: ['monospace'], // Good for "tool" aesthetic
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, #2A2F3A 1px, transparent 1px), linear-gradient(to bottom, #2A2F3A 1px, transparent 1px)",
                "glow-subtle": "radial-gradient(circle at center, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
            },
            boxShadow: {
                "glow": "0 0 20px rgba(0, 240, 255, 0.15)",
                "sharp": "0 0 0 1px #2A2F3A", // Sharp border emulation
            }
        },
    },
    plugins: [],
};
export default config;
