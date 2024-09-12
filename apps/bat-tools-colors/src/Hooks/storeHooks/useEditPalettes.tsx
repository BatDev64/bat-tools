import { useColorPaletteStore } from '../../store/useColorPalette'

export function useEditPalettes() {
  const editPalettes = useColorPaletteStore((state) => state.editPalettes)
  return (newColor: string) => {
    editPalettes(newColor)
  }
}
