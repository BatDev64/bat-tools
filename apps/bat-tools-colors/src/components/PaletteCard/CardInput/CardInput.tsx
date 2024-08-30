import { useCallback, useState } from 'react'
import { usePaletteCard } from '../../../Hooks/usePaletteCard'
import { Input } from '../../ui/Input/Input'
import debounce from 'just-debounce-it'
import { Edit } from '../../Icons/Edit'
import { useEditPalette } from '../../../Hooks/storeHooks/useEditPalette'

type InputColorPickerProps = React.InputHTMLAttributes<HTMLInputElement>

export function InputColorPicker({ ...rest }: InputColorPickerProps) {
  return (
    <div className='size-7'>
      <input
        type='color'
        {...rest}
      />
    </div>
  )
}

export function CardInput() {
  const {
    palette: { 'current-color': principalColor, id }
  } = usePaletteCard()
  const editPalette = useEditPalette()
  const [currentColor, setCurrentColor] = useState(principalColor)
  const [error, setError] = useState<boolean>(false)

  const handleDebounce = useCallback(
    debounce((newColor: string) => {
      editPalette(id, newColor)
    }, 400),
    [editPalette, id]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetColor = e.target.value
    console.log(targetColor)
    if (targetColor && targetColor.length > 7) {
      setError((state) => true)
      return
    }
    setCurrentColor(targetColor)

    handleDebounce(targetColor)
  }
  return (
    <Input
      startElement={
        <InputColorPicker
          onChange={handleChange}
          color={currentColor}
          value={currentColor}
        />
      }
      placeholder={principalColor}
      onChange={handleChange}
      value={currentColor}
      className=''
      endElement={<Edit className='size-5 fill-gray-400' />}
    />
  )
}
