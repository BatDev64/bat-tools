import { useRemovePalette } from '../../../Hooks/storeHooks/useRemovePalette'
import { usePaletteCard } from '../../../Hooks/usePaletteCard'

export function CardButtons() {
  const removePaletee = useRemovePalette()
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
