import {
  type PaletteSteps,
  type FormatsWithoutOKLCH
} from '@models/palette.types'
import { getFormattedColorScale } from '../scales/getFormattedColorScale'
import { STEPS } from './colorSteps'

/**
 * Maps a color to the defined palette steps.
 * Mapea un color a una escala definida por los "steps" de la paleta.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @param {FormatsWithoutOKLCH} format - Output format ('hex', 'rgb', 'hsl').
 *                                       Formato de salida ('hex', 'rgb', 'hsl').
 * @returns {PaletteSteps} An object with the stepped color values.
 *                         Un objeto con los valores escalonados del color.
 */

export const mapColorToSteps = (
  color: string,
  format: FormatsWithoutOKLCH = 'hex'
): PaletteSteps => {
  const colors = getFormattedColorScale(color, format)

  const values = STEPS.map((step, i) => {
    return [step, colors[i]]
  })

  return Object.fromEntries(values)
}
