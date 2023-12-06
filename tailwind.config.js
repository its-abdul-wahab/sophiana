/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cormorant-regular": ["CormorantSC-Regular", "serif"],
        "cormorant-medium": ["CormorantSC-Medium", "serif"],
        "cormorant-semibold": ["CormorantSC-SemiBold", "serif"],
        "crimson-regular": ["CrimsonText-Regular", "serif"],
        "crimson-semibold": ["CrimsonText-SemiBold", "serif"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        "inter-regular": ["Inter-Regular", "serif"],
        "inter-light": ["Inter-Light", "serif"],
        "inter-extraLight": ["Inter-ExtraLight", "serif"],
        "inter-medium": ["Inter-Medium", "serif"],
        "inter-semibold": ["Inter-SemiBold", "serif"],
      },
      colors: {
        primary: "#413D3D",
        secondary: "#F4F4F4",
        skin: "#F4EBDE",
        borderColor: "#636262",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
