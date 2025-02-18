import { usePalettesStore } from '#/store/palettes/palettes.store'

export const usePalette = () => {
  const mainColor = usePalettesStore((state) => state.mainColor)
  const selectedColors = usePalettesStore((state) => state.selectedColors)
  const setMainColor = usePalettesStore((state) => state.setMainColor)
  const getAllObjectScales = usePalettesStore(
    (state) => state.getAllObjectScales
  )
  const getAllVarScales = usePalettesStore((state) => state.getAllVarScales)
  const getObjectScales = usePalettesStore((state) => state.getObjectScales)
  const getVarScales = usePalettesStore((state) => state.getVarScales)

  return {
    mainColor,
    selectedColors,
    setMainColor,
    getObjectScales,
    getVarScales,
    getAllObjectScales,
    getAllVarScales
  }
}
