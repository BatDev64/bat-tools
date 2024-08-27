import { usePaletteCard } from '../../../Hooks/usePaletteCard'
import { useColorPaletteStore } from '../../../store/useColorPalette'

export function CardButtons() {
  const removePaletee = useColorPaletteStore((state) => state.removePalette)
  const { palette, setModalIsOpen } = usePaletteCard()
  const { id } = palette
  return (
    <div className='flex gap-4 items-center text-sm text-gray-600 '>
      <button>Save</button>
      <button onClick={() => setModalIsOpen(true)}>Export</button>
      <button onClick={() => removePaletee(id)}>Delete</button>
    </div>
  )
}
