/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0A0A0A',
          blue: '#1A1A2E',
          purple: '#8A2BE2',
          cyan: '#00FFFF',
        },
      },
      animation: {
        'neon-pulse': 'neonPulse 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #8A2BE2, #00FFFF)',
      },
    },
  },
  plugins: [],
};