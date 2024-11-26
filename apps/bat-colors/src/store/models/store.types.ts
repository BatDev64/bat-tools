import { type ColorScale } from '../../models/types'

export interface ColorScaleWithId extends ColorScale {
  id: string
}

export interface Actions {
  editColors: (color: string, id: string) => void
  editAllColors: (color: string) => void
}

export interface State {
  currentColor: string
  colors: ColorScaleWithId[]
}
