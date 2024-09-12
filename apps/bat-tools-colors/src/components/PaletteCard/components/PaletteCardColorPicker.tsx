import debounce from 'just-debounce-it'
/* import { useEffect, useState } from 'react' */
import { useEditPalette } from '../../../Hooks/storeHooks/useEditPalette'
import ColorPicker from '../../ui/Input/ColorPicker'
import { useEffect, useState } from 'react'

interface ColorPickerProps {
  color: string
  id: string
}

export const CardColorPicker = ({ color, id }: ColorPickerProps) => {
  const editPalette = useEditPalette()
  const [currentColor, setCurrentColor] = useState(color)

  const handleDebounce = debounce((newColor: string, id: string) => {
    editPalette(id, newColor)
  }, 400)

  useEffect(() => setCurrentColor(color), [color])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetColor = e.target.value

    if (targetColor && targetColor.length > 7) {
      return
    }
    setCurrentColor(targetColor)

    handleDebounce(targetColor, id)
  }
  return (
    <div className='md:max-w-[180px] md:flex-1 w-full'>
      <ColorPicker
        placeholder={color}
        onChange={handleChange}
        value={currentColor}
      />
    </div>
  )
}
