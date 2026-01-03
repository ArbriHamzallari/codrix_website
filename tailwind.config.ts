import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#4F6EF7", // Brand primary
                    hover: "#3B52C0",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#3BB4F2", // Brand secondary
                    foreground: "#FFFFFF",
                },
                dark: {
                    DEFAULT: "#0A0F1C", // Main background
                    lighter: "#151B2B", // Card/Section background
                    card: "rgba(21, 27, 43, 0.7)", // Glassmorphism base
                },
                accent: {
                    DEFAULT: "#3BB4F2",
                }
            },
            backgroundImage: {
                "gradient-main": "linear-gradient(135deg, #4F6EF7 0%, #3BB4F2 100%)",
                "gradient-dark": "linear-gradient(to bottom, #0A0F1C, #151B2B)",
                "gradient-glow": "radial-gradient(circle at center, rgba(79, 110, 247, 0.15) 0%, transparent 70%)",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-outfit)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
