export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        secondary: '#6366F1', 
        accent: '#22D3EE', 
        'accent-dark': '#0E7490', 
        background: '#F3F4F6', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
