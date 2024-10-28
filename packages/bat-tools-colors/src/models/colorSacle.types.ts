export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 950
export type Shades = Record<Shade, string>
export type ColorScale = Record<string, Shades>
