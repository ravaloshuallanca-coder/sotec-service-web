import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#101016", brand: "#ff6a00", solar: "#ffc400", mist: "#f7f5f2" },
      boxShadow: { card: "0 20px 60px rgba(16,16,22,.12)" },
    },
  },
  plugins: [],
};

export default config;
