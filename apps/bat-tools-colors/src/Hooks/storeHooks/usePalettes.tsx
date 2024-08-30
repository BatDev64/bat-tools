import { useColorPaletteStore } from '../../store/useColorPalette'

export const usePalettes = () => useColorPaletteStore((state) => state.palettes)
export const useSelectedPalettes = () => useColorPaletteStore((state) => state.selectedPalettes)
