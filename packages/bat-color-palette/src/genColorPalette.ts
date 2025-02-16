import { type Palette } from '@models/palette.types'
import { getNameColor } from './getNameColor'
import { convertColorToObject } from './formats/convertColorToObject'
import { convertColorToVariables } from './formats/convertColorToVariables'

/**
 * Generates color palette based on an input color.
 * Genera una paleta de colores basada en un color de entrada.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @returns {Palette} An object containing the color scales and CSS variables.
 *                     Un objeto con las escalas de colores y variables CSS generadas.
 */

export const genColorPalette = (color: string): Palette => {
  const name = getNameColor(color)

  const objectScales = convertColorToObject(color)

  const varScales = convertColorToVariables(color, name)

  return {
    name: name,
    colorScales: objectScales,
    cssVariables: varScales
  }
}
