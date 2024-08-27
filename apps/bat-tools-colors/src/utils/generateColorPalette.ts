import chroma from 'chroma-js'
import { generateColorScale } from './generateColorScale'
import { Palette } from '../types'

const IS_NOT_VALID_COLOR_ERROR_MESSAGE = 'It is not a valid color'

export function generateColorPalette(color: string) {
  const isValidColor = chroma.valid(color)
  if (!isValidColor) {
    throw new Error(IS_NOT_VALID_COLOR_ERROR_MESSAGE)
  }
  const shades = generateColorScale(color)
  const newPalette: Palette = {
    id: `color-${crypto.randomUUID()}`,
    'current-color': color,
    shades
  }

  return newPalette
}
