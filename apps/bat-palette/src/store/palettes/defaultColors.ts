import { type SelectedColors } from '#/models/palette.types'

export const DEFAULT_COLORS: SelectedColors = {
  primary: {
    colorScales: {
      hex: {
        '50': '#f5f3fb',
        '100': '#f0edf9',
        '200': '#e1dbf3',
        '300': '#c8bce9',
        '400': '#a392dc',
        '500': '#705dcb',
        '600': '#6252ad',
        '700': '#544690',
        '800': '#463b74',
        '900': '#383059',
        '950': '#2b2640'
      },
      rgb: {
        '50': 'rgb(245 243 251)',
        '100': 'rgb(240 237 249)',
        '200': 'rgb(225 219 243)',
        '300': 'rgb(200 188 233)',
        '400': 'rgb(163 146 220)',
        '500': 'rgb(112 93 203)',
        '600': 'rgb(98 82 173)',
        '700': 'rgb(84 70 144)',
        '800': 'rgb(70 59 116)',
        '900': 'rgb(56 48 89)',
        '950': 'rgb(43 38 64)'
      },
      hsl: {
        '50': 'hsl(250.38deg 50.98% 97%)',
        '100': 'hsl(252.24deg 50.98% 95.39%)',
        '200': 'hsl(254.55deg 50.98% 90.59%)',
        '300': 'hsl(255.19deg 50.98% 82.66%)',
        '400': 'hsl(254.11deg 50.98% 71.73%)',
        '500': 'hsl(250.38deg 50.98% 58%)',
        '600': 'hsl(250.59deg 35.78% 49.9%)',
        '700': 'hsl(250.79deg 34.33% 42.02%)',
        '800': 'hsl(250.95deg 32.4% 34.39%)',
        '900': 'hsl(250.96deg 29.68% 27.04%)',
        '950': 'hsl(250.38deg 25.49% 20%)'
      }
    },
    cssVariables: {
      hex: `--color-valhalla-50: #f5f3fb;
--color-valhalla-100: #f0edf9;
--color-valhalla-200: #e1dbf3;
--color-valhalla-300: #c8bce9;
--color-valhalla-400: #a392dc;
--color-valhalla-500: #705dcb;
--color-valhalla-600: #6252ad;
--color-valhalla-700: #544690;
--color-valhalla-800: #463b74;
--color-valhalla-900: #383059;
--color-valhalla-950: #2b2640;`,
      rgb: `--color-valhalla-50: rgb(245 243 251);
--color-valhalla-100: rgb(240 237 249);
--color-valhalla-200: rgb(225 219 243);
--color-valhalla-300: rgb(200 188 233);
--color-valhalla-400: rgb(163 146 220);
--color-valhalla-500: rgb(112 93 203);
--color-valhalla-600: rgb(98 82 173);
--color-valhalla-700: rgb(84 70 144);
--color-valhalla-800: rgb(70 59 116);
--color-valhalla-900: rgb(56 48 89);
--color-valhalla-950: rgb(43 38 64);`,
      hsl: `--color-valhalla-50: hsl(250.38deg 50.98% 97%);
--color-valhalla-100: hsl(252.24deg 50.98% 95.39%);
--color-valhalla-200: hsl(254.55deg 50.98% 90.59%);
--color-valhalla-300: hsl(255.19deg 50.98% 82.66%);
--color-valhalla-400: hsl(254.11deg 50.98% 71.73%);
--color-valhalla-500: hsl(250.38deg 50.98% 58%);
--color-valhalla-600: hsl(250.59deg 35.78% 49.9%);
--color-valhalla-700: hsl(250.79deg 34.33% 42.02%);
--color-valhalla-800: hsl(250.95deg 32.4% 34.39%);
--color-valhalla-900: hsl(250.96deg 29.68% 27.04%);
--color-valhalla-950: hsl(250.38deg 25.49% 20%);`,
      oklch: `--color-valhalla-50: oklch(96.88% 0.01 294.3deg);
--color-valhalla-100: oklch(95.22% 0.02 295.54deg);
--color-valhalla-200: oklch(90.28% 0.03 296.86deg);
--color-valhalla-300: oklch(82.02% 0.06 296.6deg);
--color-valhalla-400: oklch(70.37% 0.11 294.29deg);
--color-valhalla-500: oklch(55.28% 0.16 287.82deg);
--color-valhalla-600: oklch(49.95% 0.14 288.39deg);
--color-valhalla-700: oklch(44.62% 0.12 289.04deg);
--color-valhalla-800: oklch(39.28% 0.09 289.77deg);
--color-valhalla-900: oklch(33.95% 0.07 290.53deg);
--color-valhalla-950: oklch(28.63% 0.05 291.07deg);`
    },

    name: 'valhalla'
  },
  secondary: {
    colorScales: {
      hex: {
        '50': '#f5ffeb',
        '100': '#f1ffe1',
        '200': '#e3ffc6',
        '300': '#caff97',
        '400': '#a4ff55',
        '500': '#6ed600',
        '600': '#5fb30f',
        '700': '#509215',
        '800': '#417116',
        '900': '#335315',
        '950': '#243612'
      },
      rgb: {
        '50': 'rgb(245 255 235)',
        '100': 'rgb(241 255 225)',
        '200': 'rgb(227 255 198)',
        '300': 'rgb(202 255 151)',
        '400': 'rgb(164 255 85)',
        '500': 'rgb(110 214 0)',
        '600': 'rgb(95 179 15)',
        '700': 'rgb(80 146 21)',
        '800': 'rgb(65 113 22)',
        '900': 'rgb(51 83 21)',
        '950': 'rgb(36 54 18)'
      },
      hsl: {
        '50': 'hsl(89.23deg 100% 96%)',
        '100': 'hsl(89.21deg 100% 94.19%)',
        '200': 'hsl(89.53deg 100% 88.76%)',
        '300': 'hsl(90.45deg 100% 79.69%)',
        '400': 'hsl(91.94deg 100% 66.65%)',
        '500': 'hsl(89.23deg 100% 42%)',
        '600': 'hsl(90.87deg 84.49% 38.11%)',
        '700': 'hsl(91.55deg 75.09% 32.61%)',
        '800': 'hsl(91.63deg 67.32% 26.55%)',
        '900': 'hsl(91.05deg 59.47% 20.29%)',
        '950': 'hsl(89.23deg 50% 14%)'
      }
    },
    cssVariables: {
      hex: `--color-deep-forest-green-50: #f5ffeb;
--color-deep-forest-green-100: #f1ffe1;
--color-deep-forest-green-200: #e3ffc6;
--color-deep-forest-green-300: #caff97;
--color-deep-forest-green-400: #a4ff55;
--color-deep-forest-green-500: #6ed600;
--color-deep-forest-green-600: #5fb30f;
--color-deep-forest-green-700: #509215;
--color-deep-forest-green-800: #417116;
--color-deep-forest-green-900: #335315;
--color-deep-forest-green-950: #243612;`,
      rgb: `--color-deep-forest-green-50: rgb(245 255 235);
--color-deep-forest-green-100: rgb(241 255 225);
--color-deep-forest-green-200: rgb(227 255 198);
--color-deep-forest-green-300: rgb(202 255 151);
--color-deep-forest-green-400: rgb(164 255 85);
--color-deep-forest-green-500: rgb(110 214 0);
--color-deep-forest-green-600: rgb(95 179 15);
--color-deep-forest-green-700: rgb(80 146 21);
--color-deep-forest-green-800: rgb(65 113 22);
--color-deep-forest-green-900: rgb(51 83 21);
--color-deep-forest-green-950: rgb(36 54 18);`,
      hsl: `--color-deep-forest-green-50: hsl(89.23deg 100% 96%);
--color-deep-forest-green-100: hsl(89.21deg 100% 94.19%);
--color-deep-forest-green-200: hsl(89.53deg 100% 88.76%);
--color-deep-forest-green-300: hsl(90.45deg 100% 79.69%);
--color-deep-forest-green-400: hsl(91.94deg 100% 66.65%);
--color-deep-forest-green-500: hsl(89.23deg 100% 42%);
--color-deep-forest-green-600: hsl(90.87deg 84.49% 38.11%);
--color-deep-forest-green-700: hsl(91.55deg 75.09% 32.61%);
--color-deep-forest-green-800: hsl(91.63deg 67.32% 26.55%);
--color-deep-forest-green-900: hsl(91.05deg 59.47% 20.29%);
--color-deep-forest-green-950: hsl(89.23deg 50% 14%);`,
      oklch: `--color-deep-forest-green-50: oklch(98.71% 0.03 128.23deg);
--color-deep-forest-green-100: oklch(98.15% 0.04 128.39deg);
--color-deep-forest-green-200: oklch(96.54% 0.08 129.12deg);
--color-deep-forest-green-300: oklch(94.06% 0.14 130.65deg);
--color-deep-forest-green-400: oklch(91.07% 0.22 133.27deg);
--color-deep-forest-green-500: oklch(78.23% 0.23 135.42deg);
--color-deep-forest-green-600: oklch(68.71% 0.2 135.06deg);
--color-deep-forest-green-700: oklch(59.19% 0.16 134.59deg);
--color-deep-forest-green-800: oklch(49.67% 0.13 133.91deg);
--color-deep-forest-green-900: oklch(40.15% 0.1 132.85deg);
--color-deep-forest-green-950: oklch(30.64% 0.06 130.93deg);`
    },

    name: 'deep-forest-green'
  },
  neutral: {
    colorScales: {
      hex: {
        '50': '#f7f7f8',
        '100': '#f3f3f3',
        '200': '#e6e6e7',
        '300': '#d1d0d3',
        '400': '#b4b3b6',
        '500': '#918f93',
        '600': '#757478',
        '700': '#5b5a5d',
        '800': '#424143',
        '900': '#2a2a2b',
        '950': '#141415'
      },
      rgb: {
        '50': 'rgb(247 247 248)',
        '100': 'rgb(243 243 243)',
        '200': 'rgb(230 230 231)',
        '300': 'rgb(209 208 211)',
        '400': 'rgb(180 179 182)',
        '500': 'rgb(145 143 147)',
        '600': 'rgb(117 116 120)',
        '700': 'rgb(91 90 93)',
        '800': 'rgb(66 65 67)',
        '900': 'rgb(42 42 43)',
        '950': 'rgb(20 20 21)'
      },
      hsl: {
        '50': 'hsl(260deg 2.5% 97%)',
        '100': 'hsl(260deg 2.47% 95.33%)',
        '200': 'hsl(260.01deg 2.38% 90.34%)',
        '300': 'hsl(260.02deg 2.23% 82.15%)',
        '400': 'hsl(260.03deg 2.02% 70.94%)',
        '500': 'hsl(260deg 1.75% 57%)',
        '600': 'hsl(259.97deg 1.89% 46.18%)',
        '700': 'hsl(259.94deg 1.9% 35.8%)',
        '800': 'hsl(259.88deg 1.92% 25.93%)',
        '900': 'hsl(259.77deg 1.97% 16.64%)',
        '950': 'hsl(260deg 2.5% 8%)'
      }
    },
    cssVariables: {
      hex: `--color-jumbo-50: #f7f7f8;
--color-jumbo-100: #f3f3f3;
--color-jumbo-200: #e6e6e7;
--color-jumbo-300: #d1d0d3;
--color-jumbo-400: #b4b3b6;
--color-jumbo-500: #918f93;
--color-jumbo-600: #757478;
--color-jumbo-700: #5b5a5d;
--color-jumbo-800: #424143;
--color-jumbo-900: #2a2a2b;
--color-jumbo-950: #141415;`,
      rgb: `--color-jumbo-50: rgb(247 247 248);
--color-jumbo-100: rgb(243 243 243);
--color-jumbo-200: rgb(230 230 231);
--color-jumbo-300: rgb(209 208 211);
--color-jumbo-400: rgb(180 179 182);
--color-jumbo-500: rgb(145 143 147);
--color-jumbo-600: rgb(117 116 120);
--color-jumbo-700: rgb(91 90 93);
--color-jumbo-800: rgb(66 65 67);
--color-jumbo-900: rgb(42 42 43);
--color-jumbo-950: rgb(20 20 21);`,
      hsl: `--color-jumbo-50: hsl(260deg 2.5% 97%);
--color-jumbo-100: hsl(260deg 2.47% 95.33%);
--color-jumbo-200: hsl(260.01deg 2.38% 90.34%);
--color-jumbo-300: hsl(260.02deg 2.23% 82.15%);
--color-jumbo-400: hsl(260.03deg 2.02% 70.94%);
--color-jumbo-500: hsl(260deg 1.75% 57%);
--color-jumbo-600: hsl(259.97deg 1.89% 46.18%);
--color-jumbo-700: hsl(259.94deg 1.9% 35.8%);
--color-jumbo-800: hsl(259.88deg 1.92% 25.93%);
--color-jumbo-900: hsl(259.77deg 1.97% 16.64%);
--color-jumbo-950: hsl(260deg 2.5% 8%);`,
      oklch: `--color-jumbo-50: oklch(97.68% 0 304.78deg);
--color-jumbo-100: oklch(96.38% 0 303.55deg);
--color-jumbo-200: oklch(92.49% 0 302.45deg);
--color-jumbo-300: oklch(86.02% 0 301.97deg);
--color-jumbo-400: oklch(76.97% 0 301.73deg);
--color-jumbo-500: oklch(65.38% 0.01 301.54deg);
--color-jumbo-600: oklch(56.02% 0.01 301.41deg);
--color-jumbo-700: oklch(46.83% 0.01 301.39deg);
--color-jumbo-800: oklch(37.64% 0 301.36deg);
--color-jumbo-900: oklch(28.46% 0 301.3deg);
--color-jumbo-950: oklch(19.16% 0 301.47deg);`
    },

    name: 'jumbo'
  }
}
