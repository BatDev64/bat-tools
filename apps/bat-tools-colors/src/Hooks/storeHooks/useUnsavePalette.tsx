import { useColorPaletteStore } from '../../store/useColorPalette'

export function useUnsavePalette() {
  const unsavePalette = useColorPaletteStore((state) => state.unsavePalette)
  return (id: string) => {
    unsavePalette(id)
  }
}
