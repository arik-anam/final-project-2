/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      'font-color': '#091133',
      'font-color-2': '#6F7CB2',
      'font-color-3': '#5D6970',
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'contract-bg': "url('../img/background/contract-bakground.png')",
        'footer-texture': "url('../img/background/footer-backgrouhnd.png')",
      }
    }
  },
};
