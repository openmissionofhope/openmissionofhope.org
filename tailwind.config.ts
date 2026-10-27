import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Open Mission of Hope palette, shared with Ebola Watch and Agape.
        paper: '#f8f6f1',
        ink: '#16181d',
        muted: '#55534e',
        line: '#e3e0d7',
        brand: {
          50: '#eef4fb',
          100: '#d9e6f6',
          200: '#b7d3f6',
          600: '#1c5cab',
          700: '#184f95',
          800: '#123d75',
          900: '#0c2a52',
        },
        hope: {
          50: '#fbf5e9',
          600: '#9a6412',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
