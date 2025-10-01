/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-text-color": "var(--body-text-color)",
        "cpbg-black": "var(--cpbg-black)",
        cpblack: "var(--cpblack)",
        "cpbody-seconary-text": "var(--cpbody-seconary-text)",
        "cpbody-text": "var(--cpbody-text)",
        cpstroke: "var(--cpstroke)",
        cpwhite: "var(--cpwhite)",
        "variable-collection-CP-CPC": "var(--variable-collection-CP-CPC)",
      },
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        "CP-body-4": "var(--CP-body-4-font-family)",
        "CP-body1": "var(--CP-body1-font-family)",
        "CP-body2": "var(--CP-body2-font-family)",
        "CP-body3": "var(--CP-body3-font-family)",
        "CP-btn-text": "var(--CP-btn-text-font-family)",
        "CP-h1": "var(--CP-h1-font-family)",
        "CP-h2": "var(--CP-h2-font-family)",
        "CP-h3": "var(--CP-h3-font-family)",
        h2: "var(--h2-font-family)",
        h4: "var(--h4-font-family)",
        "list-text": "var(--list-text-font-family)",
        "sub-heading": "var(--sub-heading-font-family)",
      },
      boxShadow: {
        "shadow-1": "var(--shadow-1)",
      },
    },
  },
  plugins: [],
};
