import { type Format } from '@models/palette.types'
import { genColorScale } from './genColorScale'

/**
 * Generates a color scale in the specified format.
 * Genera una escala de colores en el formato especificado.
 *
 * @param {string} color - Base color in any valid format.
 *                         Color base en cualquier formato válido.
 * @param {Format} format - Output format ('hex', 'rgb', 'hsl', etc.).
 *                           Formato de salida ('hex', 'rgb', 'hsl', etc.).
 * @returns {string[]} An array with 11 colors in the specified format.
 *                     Un array con 11 colores en el formato especificado.
 */
export const getFormattedColorScale = (
  color: string,
  format: Format = 'hex'
) => {
  const colorScale = genColorScale(color)

  return colorScale.map((color) =>
    format !== 'hex' ? color.css(format) : color.hex()
  )
}
