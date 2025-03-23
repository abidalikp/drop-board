/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        raw: "var(--raw)",
        pure: "var(--pure)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
