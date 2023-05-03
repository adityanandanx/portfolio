/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
          spin3d: {
            '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
            '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' },
          }
      },
      animation: {
        spin3d: "spin3d 1s ease-in-out infinite"
      }
      
    }
  },
  plugins: [],
}
