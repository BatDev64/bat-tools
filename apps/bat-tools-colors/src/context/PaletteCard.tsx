import { createContext, useState } from 'react'
import { type Palette as PaletteType } from '../types'

interface PaletteCardType {
  palette: PaletteType
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PaletteCardContext = createContext<PaletteCardType | undefined>(undefined)

interface PaletteCardProps {
  children: React.ReactNode
  colorPalette: PaletteType
}

export function PaletteCardProvider({ children, colorPalette }: PaletteCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <PaletteCardContext.Provider
      value={{
        palette: colorPalette,
        setModalIsOpen: setIsOpen,
        modalIsOpen: isOpen
      }}>
      {children}
    </PaletteCardContext.Provider>
  )
}
