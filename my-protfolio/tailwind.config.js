/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        batman: {
          black: '#0A0A0A',
          dark: '#1A1A1A',
          gray: '#2C2C2C',
          lightgray: '#3C3C3C',
          gold: '#FFD700',
          yellow: '#F4D03F',
          blue: '#1E3A8A',
          darkblue: '#0F172A',
        }
      },
      fontFamily: {
        'batman': ['Orbitron', 'monospace'],
        'gotham': ['Inter', 'sans-serif'],
      },
      animation: {
        'cape-flutter': 'capeFlutter 3s ease-in-out infinite',
        'bat-signal': 'batSignal 2s ease-in-out infinite',
        'batmobile': 'batmobile 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        capeFlutter: {
          '0%, 100%': { transform: 'rotate(-2deg) scaleY(1)' },
          '50%': { transform: 'rotate(2deg) scaleY(1.05)' },
        },
        batSignal: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        batmobile: {
          '0%': { transform: 'translateX(-100vw) rotate(-5deg)' },
          '100%': { transform: 'translateX(100vw) rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #FFD700' },
          'to': { boxShadow: '0 0 30px #FFD700, 0 0 40px #FFD700' },
        },
        slideUp: {
          'from': { opacity: 0, transform: 'translateY(50px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
      },
      backgroundImage: {
        'gotham-skyline': "url('/src/assets/gotham-skyline.svg')",
        'bat-signal': "url('/src/assets/bat-signal.svg')",
      }
    },
  },
  plugins: [],
}
