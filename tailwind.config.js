/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        light: {
          text: '#333333', // Text color for light theme
          background: '#FFFFFF', // Background color for light theme
          primary: '#1f1f1f', // Primary color for light theme
          secondary: '#64748B', // Secondary color for light theme
          accent: '#EC4899', // Accent color for light theme
        },
        dark: {
          text: '#FFF', // Text color for dark theme
          background: '#1f1f1f', // Background color for dark theme
          primary: '#f8f8f8', // Primary color for dark theme
          secondary: '#6B7280', // Secondary color for dark theme
          accent: '#F472B6', // Accent color for dark theme
        },
        customGray: '#8c8c8c',
        customBlack: '#27242f',
        customLightGreen: '#00FFA4',
        customDarkGreen:'#27C93F',
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, #00ffa4 0%, #a668ff 100%)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'sans-serif'],
        'monospace':['Courier New', 'Courier', 'monospace'],
      },
      boxShadow: {
        'custom': '0 .5rem 1rem rgba(0, 0, 0, .4)',
      },
    },
  },
  plugins: [],
}