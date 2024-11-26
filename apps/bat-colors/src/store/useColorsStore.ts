import { create, type StateCreator } from 'zustand'
import {
  type State,
  type Actions,
  type ColorScaleWithId
} from './models/store.types'
import { createColorVariants } from '../utils/createColorVariants'
import { colorScale } from '@bat-tools/colors'
import { v4 as uuidv4 } from 'uuid'

const DEFAULT_COLOR = '#22194D'

const initialState = createColorVariants(DEFAULT_COLOR).map((el) => {
  return {
    id: uuidv4(),
    ...colorScale(el)
  } as ColorScaleWithId
})

type ColorsSlice = State & Actions

export const storeApi: StateCreator<ColorsSlice> = (set, get) => ({
  currentColor: DEFAULT_COLOR,
  colors: initialState,
  editColors: (color: string, id: string) => {
    const { colors } = get()

    const newState = colors.map((el) => {
      if (el.id === id) {
        const newScale = colorScale(color)
        return {
          ...el,
          name: newScale.name,
          shades: newScale.shades
        }
      }
      return el
    })

    set({ colors: newState })
  },
  editAllColors: (color: string) => {
    const { colors } = get()

    const variants = createColorVariants(color)

    const newState = colors.map((el, i) => {
      return {
        ...el,
        ...colorScale(variants[i])
      }
    })

    set({
      currentColor: color,
      colors: newState
    })
  }
})

export const useColorsStore = create<ColorsSlice>()((...a) => ({
  ...storeApi(...a)
}))
