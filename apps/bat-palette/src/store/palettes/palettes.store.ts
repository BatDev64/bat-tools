/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'
import {
  type FormatsWithoutOKLCH,
  type PaletteSteps,
  type ColorCategory,
  type Format
} from '#/models/palette.types'
import { genStoreColors } from './helpers/genStoreColors'
import { type PalettesStore } from './models/palettesStore.types'
import { DEFAULT_COLORS } from './defaultColors'

// Default main color and initial state for the store.
// Color principal por defecto y estado inicial de la store.
const mainColor = '#22194D'

/**
 * Zustand store for managing color palettes.
 * Store de Zustand para gestionar paletas de colores.
 *
 * This store maintains the main color and its generated palettes, and provides actions to update or retrieve them.
 * Esta store mantiene el color principal y sus paletas generadas, y provee acciones para actualizarlas o recuperarlas.
 */
export const usePalettesStore = create<PalettesStore>((set, get) => ({
  mainColor: mainColor,
  selectedColors: DEFAULT_COLORS,

  /**
   * Sets the main color and updates the selected color palettes.
   * Establece el color principal y actualiza las paletas de colores seleccionadas.
   *
   * @param {string} color - New base color.
   *                         Nuevo color base.
   * @param {ColorCategory} [edit] - (Optional) If provided, updates only the specific color category.
   *                                 (Opcional) Si se proporciona, actualiza solo la categoría de color específica.
   */
  setMainColor: (color: string, edit?: ColorCategory) => {
    if (edit) {
      const newColors = genStoreColors(color, edit)
      set((_state) => ({
        selectedColors: newColors
      }))
    }

    const newColors = genStoreColors(color)
    set((_state) => ({ mainColor: color, selectedColors: newColors }))
  },

  /**
   * Retrieves the object scales (palette steps) for a specific color category in the given format.
   * Recupera las escalas de objetos (pasos de la paleta) para una categoría de color específica en el formato dado.
   *
   * @param {ColorCategory} category - The color category (e.g., 'primary', 'secondary', 'neutral').
   *                                   La categoría de color (por ejemplo, 'primary', 'secondary', 'neutral').
   * @param {FormatsWithoutOKLCH} format - Output format ('hex', 'rgb', 'hsl').
   *                                       Formato de salida ('hex', 'rgb', 'hsl').
   * @returns {string} A JSON string representation of the palette steps.
   *                   Representación en cadena JSON de los pasos de la paleta.
   */
  getObjectScales: (category: ColorCategory, format: FormatsWithoutOKLCH) => {
    const { selectedColors } = get()
    const shades = selectedColors[category].colorScales[format]
    const name = selectedColors[category].name
    const colors = {
      [name]: shades
    }
    return JSON.stringify(colors, null, 2)
  },

  /**
   * Retrieves the CSS variables for a specific color category in the given format.
   * Recupera las variables CSS para una categoría de color específica en el formato dado.
   *
   * @param {ColorCategory} category - The color category.
   *                                   La categoría de color.
   * @param {Format} format - Output format ('hex', 'rgb', 'hsl', etc.).
   *                           Formato de salida ('hex', 'rgb', 'hsl', etc.).
   * @returns {string} A string containing the CSS variables.
   *                   Cadena que contiene las variables CSS.
   */
  getVarScales: (category: ColorCategory, format: Format) => {
    const { selectedColors } = get()
    const colors = selectedColors[category].cssVariables[format]
    return colors
  },

  /**
   * Retrieves the object scales (palette steps) for all color categories in the given format.
   * Recupera las escalas de objetos (pasos de la paleta) para todas las categorías de color en el formato dado.
   *
   * @param {FormatsWithoutOKLCH} [format='hex'] - Output format ('hex', 'rgb', 'hsl').
   *                                               Formato de salida ('hex', 'rgb', 'hsl').
   * @returns {string} A JSON string representation of all palette steps grouped by color name.
   *                   Representación en cadena JSON de todas las escalas de la paleta agrupadas por nombre.
   */
  getAllObjectScales: (format: FormatsWithoutOKLCH = 'hex') => {
    const { selectedColors } = get()
    const names = Object.values(selectedColors).map((c) => c.name)
    const codes = Object.values(selectedColors)
    const groupCodes = codes.reduce(
      (acc, el, i) => {
        acc[names[i]] = el.colorScales[format]
        return acc
      },
      {} as Record<string, PaletteSteps>
    )
    return JSON.stringify(groupCodes, null, 2)
  },

  /**
   * Retrieves the CSS variables for all color categories in the given format.
   * Recupera las variables CSS para todas las categorías de color en el formato dado.
   *
   * @param {Format} [format='hex'] - Output format ('hex', 'rgb', 'hsl', etc.).
   *                                   Formato de salida ('hex', 'rgb', 'hsl', etc.).
   * @returns {string} A string containing all the concatenated CSS variables.
   *                   Cadena que contiene todas las variables CSS concatenadas.
   */
  getAllVarScales: (format: Format = 'hex') => {
    const { selectedColors } = get()
    const codes = Object.values(selectedColors)
      .map((c) => c.cssVariables[format])
      .join('\n\n')
    return codes
  }
}))
