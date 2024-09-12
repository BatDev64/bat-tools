import { type PaletteType } from '../../types'
import { PaletteCard } from '../PaletteCard/PaletteCard'
import { List } from '../ui/List/List'
import PaletteHeader from './components/PaletteHeader'
import PaletteModal from './components/PaletteModal'

export function Palettes({ palettes }: { palettes: Array<PaletteType> }) {
  return (
    <List
      className='flex flex-col gap-8 '
      items={palettes}
      keyItem={(palette) => palette.id}
      renderItem={(palette) => {
        return (
          <PaletteCard>
            <div className='flex flex-col gap-4'>
              <PaletteHeader
                color={palette['current-color']}
                id={palette.id}
                isSaved={palette.isSaved}
              />
              <PaletteCard.CardBody>
                <PaletteCard.CardPalette
                  id={palette.id}
                  shades={palette.shades}
                />
              </PaletteCard.CardBody>
            </div>
            <PaletteModal shades={palette.shades} />
          </PaletteCard>
        )
      }}
    />
  )
}
