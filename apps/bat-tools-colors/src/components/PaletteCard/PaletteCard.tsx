import { PaletteCardProvider } from '../../context/PaletteCard'
import { type Palette as PaletteType } from '../../types'
import { CardModal } from './CardModal/CardModal'

import { CardHeader } from './CardHeader/CardHeader'
import { CardPalette } from './CardPalette/CardPalette'

interface PaletteCardProps {
  colorPalette: PaletteType
}

export function PaletteCard({ colorPalette }: PaletteCardProps) {
  return (
    <PaletteCardProvider colorPalette={colorPalette}>
      <div className='flex flex-col gap-4'>
        <CardHeader />
        <CardPalette />
        <CardModal />
      </div>
    </PaletteCardProvider>
  )
}
