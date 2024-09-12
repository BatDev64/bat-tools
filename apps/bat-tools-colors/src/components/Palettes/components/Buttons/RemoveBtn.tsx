import { useRemovePalette } from "../../../../Hooks/storeHooks/useRemovePalette"
import { Close } from "../../../Icons/Close"
import { PaletteCard } from "../../../PaletteCard/PaletteCard"

interface RemoveBtnProps {
  id: string
}

const RemoveBtn = ({ id }: RemoveBtnProps) => {
  const removePaletee = useRemovePalette()
  return (
    <PaletteCard.CardButton onClick={() => removePaletee(id)}>
      <div className='size-6'>
        <Close />
      </div>
    </PaletteCard.CardButton>
  )
}

export default RemoveBtn
