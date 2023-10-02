/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      footer: { max: "560px" },
      sm: { max: "479px" },
      xs: { max: "319px" },
    },
    extend: {
      spacing: {
        "page-layout": "5%",
      },
      colors: {
        primary: {
          50: "#e7e7ed",
          100: "#b6b3c6",
          200: "#928fab",
          300: "#605c84",
          400: "#413c6d",
          DEFAULT: "#120b48",
          600: "#100a42",
          700: "#0d0833",
          800: "#0a0628",
          900: "#08051e",
        },
      },
      fontSize: {
        xxs: "var(--sub-h3-fs)",
        xs: "var(--body-3-fs)",
        fmd: "var(--sub-h2-fs)",
        h1: "var(--h1-fs)",
        h2: "var(--h2-fs)",
        h3: "var(--h3-fs)",
        h4: "var(--h4-fs)",
        h5: "var(--h5-fs)",
        h6: "var(--h6-fs)",
        "sub-h1": "var(--sub-h1-fs)",
        "sub-h2": "var(--sub-h2-fs)",
        "sub-h3": "var(--sub-h3-fs)",
      },
    },
  },
  plugins: [],
};
