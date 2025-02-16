export type Format = 'hex' | 'rgb' | 'hsl' | 'oklch'
export type FormatsWithoutOKLCH = Exclude<Format, 'oklch'>

export type Step =
  `${50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950}`

export type PaletteSteps = Record<Step, string>

export interface Palette {
  name: string
  colorScales: Record<FormatsWithoutOKLCH, PaletteSteps>
  cssVariables: Record<Format, string>
}
