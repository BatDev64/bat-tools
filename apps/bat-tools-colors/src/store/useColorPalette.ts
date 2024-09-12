import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Palette } from '../types'
import { generateColorScale } from '../utils/generateColorScale'
import chroma from 'chroma-js'

interface PaletteType extends Palette {
  isSaved: boolean
}
interface PalettesActions {
  createPalette: (color?: string) => void
  removePalette: (id: string) => void
  editPalette: (id: string, newColor: string) => void
  editPalettes: (color: string) => void
}
interface SavedPalettesActions {
  savePalette: (id: string) => void
  unsavePalette: (id: string) => void
}

type Action = PalettesActions &
  SavedPalettesActions & {
    toggleModal: () => void
  }
interface State {
  palettes: PaletteType[]
  selectedPalettes: PaletteType[]
  modalIsOpen: boolean
}

const createGrayColor = (color: string) => chroma(color).desaturate(3).hex()
const createComplementaryColor = (color: string) => chroma(color).set('hsl.h', '+180').hex()

const storeApi: StateCreator<State & Action, [['zustand/devtools', never]]> = (set, get) => {
  return {
    palettes: [],
    selectedPalettes: [],
    createPalette: (color?: string) => {
      const { palettes } = get()

      const firstColor = color || '#464ee2'

      let newColor = firstColor
      if (palettes.length === 1) {
        const grayColor = createGrayColor(palettes[0]['current-color'])
        newColor = grayColor
      } else if (palettes.length === 2) {
        const complementaryColor = createComplementaryColor(palettes[0]['current-color'])
        newColor = complementaryColor
      }

      const palette = generateColorScale(newColor)
      const newPalette: PaletteType = {
        id: `color-${crypto.randomUUID()}`,
        'current-color': newColor,
        shades: palette,
        isSaved: false
      }
      if (palettes.length < 3) {
        set((state) => ({ palettes: [...state.palettes, newPalette] }), false, 'CREATE_PALLETE')
      }
    },
    removePalette: (id: string) => {
      const { palettes } = get()
      if (palettes.length > 0) {
        const newPalettes = palettes.filter((el) => el.id !== id)
        set({ palettes: newPalettes }, false, 'REMOVE_PALETTE')
      }
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
    editPalettes: (color: string) => {
      const { palettes } = get()
      const palettesClone = structuredClone(palettes)
      if (palettes.length > 0) {
        const newState = palettesClone.map((el, index) => {
          let newColor = color
          if (index === 1) {
            const grayColor = createGrayColor(color)
            newColor = grayColor
          } else if (index === 2) {
            const complementaryColor = createComplementaryColor(color)
            newColor = complementaryColor
          }
          const palette: PaletteType = {
            ...el,
            'current-color': newColor,
            shades: generateColorScale(newColor)
          }
          return palette
        })

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        set((state) => ({ palettes: newState }), false, 'EDIT_PALLETES')
      }
    },
    /* selected palette */
    savePalette: (id: string) => {
      const { palettes } = get()
      const cloneState = structuredClone(palettes)
      const indexPalette = cloneState.findIndex((palette) => palette.id === id)
      const newPalette: PaletteType = {
        ...cloneState[indexPalette],
        id: `color-${crypto.randomUUID()}`,
        isSaved: true
      }
      set(
        (state) => ({
          selectedPalettes: [...state.selectedPalettes, newPalette]
        }),
        false,
        'SAVE_PALETTE'
      )
    },
    unsavePalette: (id: string) => {
      const { selectedPalettes } = get()
      if (selectedPalettes.length > 0) {
        const cloneState = structuredClone(selectedPalettes)
        const newPalettes = cloneState.filter((el) => el.id !== id)
        set({ selectedPalettes: newPalettes }, false, 'UNSAVE_PALETTE')
      }
    },
    /* modal */
    modalIsOpen: false,
    toggleModal: () => set((state) => ({ modalIsOpen: !state.modalIsOpen }), false, 'TOGGLE_MODAL')
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
