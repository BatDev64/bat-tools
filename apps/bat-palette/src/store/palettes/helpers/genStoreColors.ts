import { getComplementary } from '#utils/getComplementaryColor'
import { getNeutralColor } from '#utils/getNeutralColor'
import { genColorPalettes } from '@bat-tools/bat-color-palette'
import { ColorCategory, SelectedColors } from '#/models/palette.types.ts'

/**
 * Generates an object containing color palettes for primary, secondary, and neutral colors.
 * Genera un objeto que contiene las paletas de colores para primario, secundario y neutro.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @param {ColorCategory} [category] - (Optional) If provided, updates only the specific color category.
 *                                     (Opcional) Si se proporciona, actualiza solo la categoría de color específica.
 * @returns {SelectedColors} An object with generated color palettes.
 *                           Objeto con las paletas de colores generadas.
 */
export const genStoreColors = (color: string, category?: ColorCategory) => {
  const complementaryColor = getComplementary(color)
  const neutralColor = getNeutralColor(color)

  const colors: SelectedColors = {
    primary: genColorPalettes(color),
    secondary: genColorPalettes(complementaryColor),
    neutral: genColorPalettes(neutralColor)
  }

  if (category)
    return {
      ...colors,
      [category]: genColorPalettes(color)
    }

  return colors
}
