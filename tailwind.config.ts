const {nextui} = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient: 'rgba(32,30,82,1)'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#000000",
              foreground: "#000000"
            },
            focus: "#FFFFFF",
          },
        },
        dark:{
          colors:{
            primary: {
              DEFAULT: "#C9A9E9",
              foreground: "#000000",
            },
            focus: "#C9A9E9",
          }
        }
      },
    }
  )],
};
export default config;
