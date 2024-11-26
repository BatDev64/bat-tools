import { useColorsStore } from '../store/useColorsStore'

export const useColors = () => {
  const currentColor = useColorsStore((state) => state.currentColor)
  const colors = useColorsStore((state) => state.colors)
  const editAllColors = useColorsStore((state) => state.editAllColors)
  const editColors = useColorsStore((state) => state.editColors)

  return { currentColor, colors, editColors, editAllColors }
}
