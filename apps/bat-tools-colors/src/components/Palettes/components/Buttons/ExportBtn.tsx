import { useModalIsOpen } from '../../../../Hooks/storeHooks/useModalIsOpen'
import { PaletteCard } from '../../../PaletteCard/PaletteCard'

const ExportBtn = () => {
  const { toggleModal } = useModalIsOpen()
  return <PaletteCard.CardButton onClick={() => toggleModal()}>Export</PaletteCard.CardButton>
}

export default ExportBtn
