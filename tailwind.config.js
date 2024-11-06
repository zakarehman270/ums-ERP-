/** @type {import('tailwindcss').Config} */
module.exports = {
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
        customBlue: "#E6F2F3",
        customDarkBlue: '#34919C',
        customGray: '#D4D4E5',
        dashboardBackground: '#F3F3F9',
        dashboardCustomBlue: 'rgb(61, 120, 227, 0.15)'
      },
      boxShadow: {
        DashboardShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
        PageSideBarShadow: '0 2px 4px rgba(15, 34, 58, 0.12)',
      },
      fontSize: {
        "custom-em": "0.875em",
      },
      screens: {
        'sm-425': '425px', // Custom breakpoint
    },
    },
  },
  plugins: [],
};
