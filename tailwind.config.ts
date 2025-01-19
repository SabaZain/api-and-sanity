import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
  			sm: '425px',
  			md: '700px',
			lg: '1000px',
			'max-lg': '1000px'
  		},
 
    colors: {
      primary:"#7E33E0",
        secondary:"#1A0B5B",
        main:"#FB2E86",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
