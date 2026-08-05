import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#07111f", brand: "#f36b21", mist: "#eef3f8" },
      boxShadow: { card: "0 20px 60px rgba(7,17,31,.10)" },
    },
  },
  plugins: [],
};

export default config;
