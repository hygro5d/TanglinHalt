import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: '#5f249f',
        white: {
          main: '#ffffff',
          light: '#999',
          dark: '#3c3c3c',
        },
        red: {
          main: '#dd3333',
        },
        orange: {
          main: '#f7833b',
        },
      },
      screens: {
        xs: '325px',
        sm: '500px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
