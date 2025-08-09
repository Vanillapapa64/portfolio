// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      dropShadow: {
        'glow': [
          '0 0px 20px rgba(255, 255, 255, 0.35)', // First shadow layer
          '0 0px 65px rgba(255, 255, 255, 0.2)'  // Second shadow layer for more intensity
        ]
      },
      fontFamily: {
        // Corrected variable name to match layout.tsx
        clash: ['var(--font-clash-display)'],
      },
      colors: {
        'kindayellow':'rgb(0,241,181)'
      },
    },
  },
  plugins: [],
};
export default config;