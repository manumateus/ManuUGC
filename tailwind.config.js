/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom palette
        'primary': '#1a1a1a',        // Negro profundo
        'accent': '#d4a574',          // Dorado/Beige
        'light-bg': '#f5f5f5',        // Gris ligero
        'light-card': '#f9f9f9',      // Gris muy claro
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
      opacity: {
        '8': '0.08',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
