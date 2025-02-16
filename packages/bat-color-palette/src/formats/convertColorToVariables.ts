import { type Format } from '@models/palette.types'
import { genCSSVariables } from './genCSSVariables'

/**
 * Converts a color into a set of CSS variables in different formats.
 * Convierte un color en un conjunto de variables CSS en diferentes formatos.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @param {string} name - Base name for the variables.
 *                        Nombre base para las variables.
 * @returns {Record<Format, string>} An object with CSS variables in each format.
 *                                    Un objeto con variables CSS en cada formato.
 */

const FORMATS: ReadonlyArray<Format> = ['hex', 'rgb', 'hsl', 'oklch']

export const convertColorToVariables = (
  color: string,
  name: string
): Record<Format, string> => {
  const values = FORMATS.map((el) => [el, genCSSVariables(color, name, el)])
  const varScales = Object.fromEntries(values)

  return varScales
}
