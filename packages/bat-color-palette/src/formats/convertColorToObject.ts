import {
  type FormatsWithoutOKLCH,
  type PaletteSteps
} from '@models/palette.types'
import { mapColorToSteps } from './mapColorToSteps'

/**
 * Converts a color into an object with color scales in different formats.
 * Convierte un color en un objeto con escalas en diferentes formatos.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @returns {Record<FormatsWithoutOKLCH, PaletteSteps>} An object with color scales in various formats.
 *                                                      Un objeto con escalas de colores en diferentes formatos.
 */

const FORMATS_WITHOUT_OKLCH: ReadonlyArray<FormatsWithoutOKLCH> = [
  'hex',
  'rgb',
  'hsl'
]

export const convertColorToObject = (
  color: string
): Record<FormatsWithoutOKLCH, PaletteSteps> => {
  const values = FORMATS_WITHOUT_OKLCH.map((el) => [
    el,
    mapColorToSteps(color, el)
  ])
  const objectScales = Object.fromEntries(values)

  return objectScales
}
