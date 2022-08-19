module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        blue_A701: "#0a58ff",
        bluegray_50: "#eaecf0",
        red_700: "#d03329",
        blue_A700: "#0061ff",
        gray_900: "#0d1624",
        bluegray_100: "#d6dae2",
        gray_50: "#f9fbff",
        bluegray_900: "#262b35",
        black_900: "#000000",
        bluegray_400: "#74839d",
        bluegray_300: "#9ea8ba",
        bluegray_200: "#bac1ce",
        white_A700: "#ffffff",
        gray_700_11: "#55555511",
      },
      borderRadius: {
        radius6: "6px",
        radius12: "12px",
        radius50: "50%",
        radius947: "9.47px",
      },
      fontFamily: { gilroy: "Gilroy", opensans: "Open Sans" },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
