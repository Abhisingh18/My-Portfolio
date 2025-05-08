/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59afff',
          500: '#3b8aff',
          600: '#1f66ff',
          700: '#1752eb',
          800: '#1941d1',
          900: '#1c3aa6',
          950: '#162359',
        },
        secondary: {
          50: '#ebfeff',
          100: '#cefaff',
          200: '#a0f3ff',
          300: '#60e9ff',
          400: '#28d4ff',
          500: '#00baee',
          600: '#0094ca',
          700: '#0176a4',
          800: '#086186',
          900: '#0c516f',
          950: '#07344c',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffdca6',
          300: '#ffc46d',
          400: '#ffa132',
          500: '#ff7d0a',
          600: '#fc5d02',
          700: '#cf4205',
          800: '#a4340d',
          900: '#862d0e',
          950: '#491404',
        },
        neon: {
          purple: '#b14aff',
          blue: '#0dfbff',
          pink: '#ff49db',
          green: '#13ca91',
          yellow: '#fffc40',
          red: '#ff3860',
        },
        dark: {
          DEFAULT: '#0a0b10',
          100: '#0d0f17',
          200: '#12141e',
          300: '#171a25',
          400: '#1c202e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(13, 251, 255, 0.5), 0 0 20px rgba(13, 251, 255, 0.2)',
        'neon-purple': '0 0 10px rgba(177, 74, 255, 0.5), 0 0 20px rgba(177, 74, 255, 0.2)',
        'neon-pink': '0 0 10px rgba(255, 73, 219, 0.5), 0 0 20px rgba(255, 73, 219, 0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 1s steps(1, end) infinite',
        'glow-blue': 'glow-blue 1.5s ease-in-out infinite alternate',
        'glow-purple': 'glow-purple 1.5s ease-in-out infinite alternate',
        'glow-pink': 'glow-pink 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-blue': {
          '0%': { boxShadow: '0 0 5px rgba(13, 251, 255, 0.3), 0 0 10px rgba(13, 251, 255, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(13, 251, 255, 0.6), 0 0 20px rgba(13, 251, 255, 0.3)' },
        },
        'glow-purple': {
          '0%': { boxShadow: '0 0 5px rgba(177, 74, 255, 0.3), 0 0 10px rgba(177, 74, 255, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(177, 74, 255, 0.6), 0 0 20px rgba(177, 74, 255, 0.3)' },
        },
        'glow-pink': {
          '0%': { boxShadow: '0 0 5px rgba(255, 73, 219, 0.3), 0 0 10px rgba(255, 73, 219, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 73, 219, 0.6), 0 0 20px rgba(255, 73, 219, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};