import { PaletteCard } from '../../PaletteCard/PaletteCard'
import ExportBtn from './Buttons/ExportBtn'
import RemoveBtn from './Buttons/RemoveBtn'
import SaveBtn from './Buttons/SaveBtn'

interface PaletteHeaderProps {
  id: string
  color: string
  isSaved: boolean
}

const PaletteHeader = ({ id, color, isSaved }: PaletteHeaderProps) => {
  return (
    <PaletteCard.CardHeader>
      <PaletteCard.CardColorPicker
        color={color}
        id={id}
      />
      <div className='flex gap-2 items-center text-sm'>
        <ExportBtn />
        <SaveBtn
          isSaved={isSaved}
          id={id}
        />
        <RemoveBtn id={id} />
      </div>
    </PaletteCard.CardHeader>
  )
}

export default PaletteHeader
