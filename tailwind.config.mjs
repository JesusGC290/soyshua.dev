/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        paper: '#EBE8DB',
        card: '#F5F2E7',
        ink: '#23281F',
        'ink-soft': '#5B5A4C',
        rule: '#B7B29B',
        brass: '#8F5A26',
        moss: '#3E5940',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
