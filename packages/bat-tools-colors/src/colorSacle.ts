import chroma from 'chroma-js'
import namer from 'color-namer'
import { type ColorScale } from './models/colorSacle.types'
import { sortByLuminance, createShades, isColorHex } from './utils'

// const luminances = [10, 15, 20, 35, 45, 55, 65, 78, 90, 96, 98]
const luminances = [5, 12, 20, 30, 42, 55, 68, 80, 90, 95, 98]

export const colorScale = (color: string) => {
  if (typeof color !== 'string') {
    throw new Error('color property must be a string')
  }

  const isValid = isColorHex(color)

  if (!isValid) {
    throw new Error('color property is not a hexadecimal color')
  }

  const colors = luminances.map((el, index) => {
    const saturationAdjustment = index < 6 ? 0.8 : 1
    return chroma(color)
      .set('hsl.l', el / 100)
      .set('hsl.s', chroma(color).get('hsl.s') * saturationAdjustment)
      .hex()
  })

  const sortedColors = sortByLuminance(colors)
  const shades = createShades(sortedColors)
  const nameColor = namer(shades[500])
    .pantone[0].name.toLowerCase()
    .replace(' ', '-')

  const scale: ColorScale = {
    name: nameColor,

    shades: shades
  }

  return scale
}
