module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      neutral: "#FFFFFF",
      "neutral-300": "#D2D1D6",
      "neutral-500": "#8784A4",
      "neutral-700": "#4B486A",
      "neutral-900": "#0C082B",
      "orange-500": "#F57261",
      "orange-700": "#E16151",
    },
    fontFamily: {
      inconsolata: ['"Inconsolata"', "monospace"],
    },
    extend: {
      backgroundImage: {
        "mobile-bg": "url('../public/assets/images/background-mobile.png')",
        "tablet-bg": "url('../public/assets/images/background-tablet.png')",
        "desktop-bg": "url('../public/assets/images/background-desktop.png')",
        ticket: "url('../public/assets/images/pattern-ticket.svg')",
      },
    },
  },
  plugins: [],
};
