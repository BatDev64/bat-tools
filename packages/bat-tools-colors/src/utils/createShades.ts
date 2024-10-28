import { type Shade, type Shades } from '../models/colorSacle.types'

export const createShades = (colors: Array<string>) => {
  return colors.reduce((acc, el, index, arr) => {
    const shade =
      index == 0 ? 50
      : index === arr.length - 1 ? 950
      : ((index * 100) as Shade)
    acc[shade] = el
    return acc
  }, {} as Shades)
}
