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
          accent: '#B8860B',
          silver: '#C0C0C0',
        }
      },
      fontFamily: {
        'batman': ['Orbitron', 'monospace'],
        'gotham': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }],
        '2xs': ['0.688rem', { lineHeight: '0.875rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'cape-flutter': 'capeFlutter 3s ease-in-out infinite',
        'bat-signal': 'batSignal 2s ease-in-out infinite',
        'batmobile': 'batmobile 8s linear infinite',
        'batbike': 'batbike 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(20) 1s forwards',
        'blink': 'blink 1s infinite',
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
        batbike: {
          '0%': { transform: 'translateX(-50px) scale(0.8)' },
          '50%': { transform: 'translateX(50vw) scale(1)' },
          '100%': { transform: 'translateX(100vw) scale(0.8)' },
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
