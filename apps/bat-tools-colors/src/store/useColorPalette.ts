import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Palette } from '../types'
import { generateColorScale } from '../utils/generateColorScale'
import { generateColorPalette } from '../utils/generateColorPalette'
import chroma from 'chroma-js'

interface State {
  palettes: Palette[]
  createPalette: (color?: string) => void
  removePalette: (id: string) => void
  editPalette: (id: string, newColor: string) => void
}

const storeApi: StateCreator<State, [['zustand/devtools', never]]> = (set, get) => {
  return {
    palettes: [],
    createPalette: (color?: string) => {
      const randomColor = color || chroma.random().hex()
      const palette = generateColorPalette(randomColor)
      set((state) => ({ palettes: [...state.palettes, palette] }), false, 'CREATE_PALLETE')
    },
    removePalette: (id: string) => {
      const { palettes } = get()
      const newPalettes = palettes.filter((el) => el.id !== id)
      set({ palettes: newPalettes }, false, 'REMOVE_PALETTE')
    },
    editPalette: (id: string, newColor: string) => {
      const { palettes } = get()
      const oldPalettes = structuredClone(palettes)
      const newShade = generateColorScale(newColor)

      const newPalettes = oldPalettes.map((p) => {
        return p.id === id ?
            {
              ...p,
              'current-color': newColor,
              shades: newShade
            }
          : p
      })

      set(
        {
          palettes: newPalettes
        },
        false,
        'EDIT_PALETTE'
      )
    }
  }
}

export const useColorPaletteStore = create<State>()(
  devtools(
    persist(storeApi, {
      name: 'store-palette',
      onRehydrateStorage: () => (state) => {
        if (state && state.palettes.length === 0) {
          state.createPalette()
        }
      }
    })
  )
)
