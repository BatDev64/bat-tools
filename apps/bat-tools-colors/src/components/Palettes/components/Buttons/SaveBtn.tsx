import { useSavePalette } from '../../../../Hooks/storeHooks/useSavePalette'
import { useUnsavePalette } from '../../../../Hooks/storeHooks/useUnsavePalette'
import { PaletteCard } from '../../../PaletteCard/PaletteCard'

interface SaveBtnProps {
  id: string
  isSaved: boolean
}

const SaveBtn = ({ id, isSaved }: SaveBtnProps) => {
  const savePalette = useSavePalette()
  const unsavePalette = useUnsavePalette()

  const action = !isSaved ? savePalette : unsavePalette
  const textButton = isSaved === false ? 'Save' : 'Unsave'
  return <PaletteCard.CardButton onClick={() => action(id)}>{textButton}</PaletteCard.CardButton>
}

export default SaveBtn
