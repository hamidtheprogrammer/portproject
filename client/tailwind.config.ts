import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        primaryBg: "#F5F7FA",
        darkSecondaryBg: "#0F111A",
        darkPrimaryBg: "#141824",
        blueish: "#3476f1",
      },
      screens: {
        lg: "990px",
        md: "770px",
        sm: "560px",
        xs: "400px",
        product_lg: "1120px",
        product_semilg: "855px",
        product_md: "618px",
      },
    },
  },
  plugins: [],
} satisfies Config;
