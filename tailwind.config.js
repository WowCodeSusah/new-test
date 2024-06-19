/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        hnthin: ["HelveticaNeueThin", "sans-serif"],
        hnultralight: ["HelveticaNeueUltraLight", "sans-serif"],
        hnlight: ["HelveticaNeueLight", "sans-serif"],
        hnroman: ["HelveticaNeueRoman", "sans-serif"],
        hnmedium: ["HelveticaNeueMedium", "sans-serif"],
        hnbold: ["HelveticaNeueBold", "sans-serif"],
        hnheavy: ["HelveticaNeueHeavy", "sans-serif"],
        hnblack: ["HelveticaNeueBlack", "sans-serif"],
        mmbold: ["MuseoModerno-Bold", "sans-serif"]
      },

      colors: {
        primary: {
          DEFAULT: "#bdd8b0",
          100: "#3c9284",
        },
        secondary: {
          DEFAULT: "#04315b",
        },
        offwhite: {
          DEFAULT: "#faf9f6",
          100: "#e4e4e4",
          200: "#d2d0d0",
          300: "#acb3b9",
          400: "#ebebeb",
          500: "#9da1a4",
          600: "#b6b0b0",
          700: "#787878",
        },
        ornge: {
          DEFAULT: "#ff7c52",
        },
      },

      borderRadius: {
        '4xl': '2rem',
      },

      fontSize: {
        'xxs': '0.625rem', // or any other value smaller than 0.75rem (text-xs)
      },

      width: {
        '25': '6.025rem', 
      },

      height: {
        '25': '6.025rem',
      },
    },
  },
  plugins: [],
}

