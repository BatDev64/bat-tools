import { useColorPaletteStore } from '../../store/useColorPalette'

export function useEditPalette() {
  const editPalette = useColorPaletteStore((state) => state.editPalette)
  return (id: string, newColor: string) => {
    editPalette(id, newColor)
  }
}
