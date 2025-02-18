import type {
  ColorCategory,
  SelectedColors,
  FormatsWithoutOKLCH,
  Format
} from '#/models/palette.types'

/**
 * PalettesStore defines the state and actions for managing color palettes.
 * PalettesStore define el estado y las acciones para gestionar paletas de colores.
 */
export interface PalettesStore {
  mainColor: string
  setMainColor: (color: string, edit?: ColorCategory) => void
  selectedColors: SelectedColors

  getObjectScales: (
    category: ColorCategory,
    format: FormatsWithoutOKLCH
  ) => string
  getVarScales: (category: ColorCategory, format: Format) => string

  getAllObjectScales: (format: FormatsWithoutOKLCH) => string
  getAllVarScales: (format: Format) => string
}
