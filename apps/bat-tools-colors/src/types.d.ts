type Shades = Record<string | number, string>

export interface Palette {
  id: string
  'current-color': string
  shades: Shades
}
