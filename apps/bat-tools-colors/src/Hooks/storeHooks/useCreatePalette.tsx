import { useColorPaletteStore } from '../../store/useColorPalette'

export function useCreatePalette() {
  const createPalette = useColorPaletteStore((state) => state.createPalette)
  return (color?: string) => {
    createPalette(color)
  }
}
