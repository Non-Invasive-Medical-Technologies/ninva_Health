
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        text: ["DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ninva: {
          DEFAULT: "#1d617a",
          secondary: "#00a18b",
          tertiary: "#65c5b9",
          light: "#d6efeb",
          white: "#ffffff",
          dark: "#062e2e",
          complementary: {
            sage: "#bcc4bc",
            blue: "#0474ed",
            cyan: "#91f0fa",
            peach: "#FFB69E",
            mint: "#BBE2BB",
            dark: "#1A1F2C",
          },
        },
        medical: {
          primary: "#2B7C7E",    // Teal - Primary brand color
          secondary: "#4EC989",  // Green - Secondary interactions
          accent: "#FFB69E",     // Peach - Accent elements
          success: "#65C5B9",    // Mint - Success states
          warning: "#FFB69E",    // Peach - Warning states
          error: "#FF6B6B",      // Red - Error states
          info: "#0474ed",       // Blue - Information states
        },
        surface: {
          light: "#F5F9F9",      // Light background
          white: "#FFFFFF",      // White background
          muted: "#F1F5F5",      // Muted background
          hover: "#E6EDED",      // Hover state
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      gradients: {
        'primary': 'linear-gradient(135deg, #2B7C7E 0%, #4EC989 100%)',
        'secondary': 'linear-gradient(135deg, #4EC989 0%, #65C5B9 100%)',
        'accent': 'linear-gradient(135deg, #FFB69E 0%, #FF6B6B 100%)',
        'surface': 'linear-gradient(135deg, #F5F9F9 0%, #FFFFFF 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "gradient-flow": {
          "0%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "200% 50%",
          },
        },
        "gradient-wave": {
          "0%": {
            "background-position": "0% 50%",
            "background-size": "200% 200%",
          },
          "25%": {
            "background-position": "50% 25%",
            "background-size": "200% 200%",
          },
          "50%": {
            "background-position": "100% 50%",
            "background-size": "200% 200%",
          },
          "75%": {
            "background-position": "50% 75%",
            "background-size": "200% 200%",
          },
          "100%": {
            "background-position": "0% 50%",
            "background-size": "200% 200%",
          },
        },
        "border-flow": {
          "0%": {
            "border-color": "var(--medical-primary)",
          },
          "50%": {
            "border-color": "var(--medical-secondary)",
          },
          "100%": {
            "border-color": "var(--medical-primary)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "gradient-flow": "gradient-flow 8s linear infinite",
        "gradient-wave": "gradient-wave 15s ease infinite",
        "border-flow": "border-flow 4s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
