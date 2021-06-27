module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      colors: require("daisyui/colors"),
      screens: {
        xs: "340px",
      },
    },
    
  },
  daisyui: {
    themes: [
      {
        'maibtc': {
          'primary': '#e18b00',
          'primary-focus': '#f3ac39',
          'primary-content': '#47371e',
          'secondary': '#3e3a3b',
          'secondary-focus': '#706b6d',
          'secondary-content': '#fefcfd',
          'accent': '#008fb3',
          'accent-focus': '#09aed7',
          'accent-content': '#ffffff',
          'neutral': '#5a5a5a',
          'neutral-focus': '#2e2e2e',
          'neutral-content': '#ffffff',
          'base-100': '#f2eee2',
          'base-200': '#ded0b5',
          'base-300': '#65594d',
          'base-content': '#383735',
          'info': '#288ee2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ea4b1a',
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}