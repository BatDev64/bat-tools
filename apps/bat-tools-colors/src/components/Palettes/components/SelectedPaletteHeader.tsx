import { PaletteCard } from '../../PaletteCard/PaletteCard'
import ExportBtn from './Buttons/ExportBtn'
import SaveBtn from './Buttons/SaveBtn'

interface PaletteHeaderProps {
  id: string
  isSaved: boolean
}

const SelectedPaletteHeader = ({ id, isSaved }: PaletteHeaderProps) => {
  return (
    <PaletteCard.CardHeader>
      <div className='flex gap-2 items-center text-sm'>
        <ExportBtn />
        <SaveBtn
          isSaved={isSaved}
          id={id}
        />
      </div>
    </PaletteCard.CardHeader>
  )
}

export default SelectedPaletteHeader
