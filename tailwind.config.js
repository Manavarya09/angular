/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0f141b",
        graphite: "#111827",
        'neon-blue': "#60A5FA",
        'neon-purple': "#A78BFA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1.5px)",
      },
      backgroundSize: {
        'dot-grid': '22px 22px',
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
