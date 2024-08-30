import { useColorPaletteStore } from '../../store/useColorPalette'

export function useSavePalette() {
  const savePalette = useColorPaletteStore((state) => state.savePalette)
  return (id: string) => {
    savePalette(id)
  }
}
