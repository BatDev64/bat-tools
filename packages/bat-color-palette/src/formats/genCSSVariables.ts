import { type Format } from '@models/palette.types'
import { getFormattedColorScale } from '../scales/getFormattedColorScale'
import { STEPS } from './colorSteps'

/**
 * Generates CSS variables from a color scale.
 * Genera variables CSS a partir de una escala de colores.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @param {string} name - Base name for the variables.
 *                        Nombre base para las variables.
 * @param {Format} format - Output format ('hex', 'rgb', 'hsl', etc.).
 *                           Formato de salida ('hex', 'rgb', 'hsl', etc.).
 * @returns {string} A string containing CSS variables with the generated colors.
 *                   Cadena de variables CSS con los colores generados.
 */

export const genCSSVariables = (
  color: string,
  name: string,
  format: Format = 'hex'
): string => {
  const colors = getFormattedColorScale(color, format)

  const values = STEPS.map(
    (step, i) => `--color-${name}-${step}: ${colors[i]};`
  ).join('\n')

  return values
}
