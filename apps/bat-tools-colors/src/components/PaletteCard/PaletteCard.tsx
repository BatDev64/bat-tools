import CardButton from './components/PaletteCardButton'
import { CardColorPicker } from './components/PaletteCardColorPicker'
import Header from './components/PaletteCardHeader'
import { CardModal } from './components/PaletteCardModal'
import Shades from './components/PaletteCardShades'

interface PaletteCardProps {
  children: React.ReactNode
}

export const PaletteCard = ({ children }: PaletteCardProps) => {
  return <div>{children}</div>
}

PaletteCard.CardHeader = Header
PaletteCard.CardPalette = Shades
PaletteCard.CardButton = CardButton
PaletteCard.CardColorPicker = CardColorPicker
PaletteCard.CardModal = CardModal
PaletteCard.CardBody = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>
}
