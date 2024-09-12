/* type Shades = Record<string | number, string> */
/*export type Shades = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
} */

export type Shades = {
  [key in 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950]: string
}

export interface Palette {
  id: string
  'current-color': string
  shades: Shades
}
export interface PaletteType extends Palette {
  isSaved: boolean
}
