import type { Config } from 'tailwindcss'

export default {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b5fc',
          '400': '#818df8',
          '500': '#686cf2',
          '600': '#4d45e6',
          '700': '#4237cb',
          '800': '#3630a3',
          '900': '#302e81',
          '950': '#1e1b4b'
        },
        logan: {
          '50': '#f4f5f9',
          '100': '#eceef3',
          '200': '#dbdfea',
          '300': '#c5cbdc',
          '400': '#adb3cc',
          '500': '#9fa3c1',
          '600': '#8183aa',
          '700': '#6e6f94',
          '800': '#5b5d78',
          '900': '#4d4e62',
          '950': '#2d2d39'
        }
      }
    }
  },
  plugins: []
} satisfies Config
