import { useContext } from 'react'
import { PaletteCardContext } from '../context/PaletteCard'

export function usePaletteCard() {
  const context = useContext(PaletteCardContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
