import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Palette } from '../types'
import { generateColorScale } from '../utils/generateColorScale'
import { generateColorPalette } from '../utils/generateColorPalette'
import chroma from 'chroma-js'

interface PalettesActions {
  createPalette: (color?: string) => void
  removePalette: (id: string) => void
  editPalette: (id: string, newColor: string) => void
}
interface SavedPalettesActions {
  savePalette: (id: string) => void
  unsavePalette: (id: string) => void
}

type Action = PalettesActions & SavedPalettesActions
interface State {
  palettes: Palette[]
  selectedPalettes: Palette[]
}

const storeApi: StateCreator<State & Action, [['zustand/devtools', never]]> = (set, get) => {
  return {
    palettes: [],
    selectedPalettes: [],
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
    },
    /* selected palette */
    savePalette: (id: string) => {
      const { palettes } = get()
      const cloneState = structuredClone(palettes)
      const indexPalette = cloneState.findIndex((palette) => palette.id === id)
      const newStatePalettes = cloneState.filter((palette) => palette.id !== id)
      set(
        (state) => ({
          selectedPalettes: [...state.selectedPalettes, cloneState[indexPalette]],
          palettes: newStatePalettes
        }),
        false,
        'SAVE_PALETTE'
      )
    },
    unsavePalette: (id: string) => {
      const { selectedPalettes: savedPalettes } = get()
      const cloneState = structuredClone(savedPalettes)
      const newPalettes = cloneState.filter((el) => el.id !== id)
      set({ selectedPalettes: newPalettes }, false, 'UNSAVE_PALETTE')
    }
  }
}

export const useColorPaletteStore = create<State & Action>()(
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
