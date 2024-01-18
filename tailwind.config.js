/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Grey: "#333333",
        DarkGrey: "#1F1F1F",
        OffBlack: "#121212",
        Green: "hsl(75, 94%, 57%)",
      },
    },
  },
  plugins: [],
};
