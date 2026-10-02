/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Officielle STANLEY CONSTRUCTION
        stanley: {
          black: '#09090b',    // Noir profond (zinc-950)
          charcoal: '#18181b', // Gris anthracite foncé (zinc-900)
          steel: '#27272a',    // Bordures et séparateurs sombres
          yellow: '#f59e0b',   // Jaune sécurité / signalétique (amber-500)
          gold: '#d97706',     // Jaune chaud / biseau (amber-600)
          light: '#f4f4f5',    // Fond clair de section (zinc-100)
          border: '#e4e4e7',   // Bordure claire (zinc-200)
        },
        // Directives complémentaires STANLEY CONSTRUCTION
        navy: {
          DEFAULT: '#0f172a', // Slate-900
          50: '#f8fafc',
          100: '#f1f5f9',
          700: '#334155',
          800: '#1e293b', // Dark Accent
          850: '#152033',
          900: '#0f172a', // Navy Fond
          950: '#0a0f1d',
        },
        'brand-yellow': '#f59e0b',
        dark: {
          accent: '#1e293b',
        },
        amber: {
          DEFAULT: '#f59e0b',
          400: '#fbbf24',
          500: '#f59e0b', // Signalétique Chantier
          600: '#d97706', // Accent appuyé
          700: '#b45309',
        },
        slate: {
          50: '#f8fafc', // Fond de contraste
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
