/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '100%': '100%',
        '70%': '70%',
        '90%': '90%',
        '10%': '10%',
        "30rem": '30rem'
      },
      colors: {
        backgroundLight: "#0e0e0e",
        foreground: "var(--foreground)",
        primaryBorder: '#262626',
        secondaryBorder: '#3e3e3e',
        primaryFontColor: '#fff',
        secondaryFontColor: '#6e6e6e',
        defaultBlack: '#000',
        searchBorder: '#2a2a2a',
        searchBg: '#131313',
        searchText: '#626262',
        searchHolder: '#424242',
        searchIconText: '#898989',
        projectBorder: '#e0e0e0',
        cardText: '#1c1c1c',
        labelBg: '#2b2b2b',
        modalBorder: '#1a1a1a',
        modalSupport: '#cfcfcf',
        noteFont: '#999',
        settingButtom: '#ff4747',
      },
      screens: {
        'mc': '980px',
        'vs': '320px',
        'mm': '1400px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
