/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F0', // warm off-white page background
        card: '#FFFFFF',
        ink: '#1C1B1A', // near-black text
        muted: '#6B6660', // secondary text
        line: '#E5E0D6', // borders
        clay: '#B34724', // single warm accent
        claydark: '#8F3718',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
