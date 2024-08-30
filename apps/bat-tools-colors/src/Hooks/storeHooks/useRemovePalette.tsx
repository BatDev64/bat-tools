import { useColorPaletteStore } from '../../store/useColorPalette'

export function useRemovePalette() {
  const removePalette = useColorPaletteStore((state) => state.removePalette)
  return (id: string) => {
    removePalette(id)
  }
}
