import { HexColorPicker } from 'react-colorful'

interface Props {
  color: string
  onChange: (newColor: string) => void
}
export const ColorPicker = ({ onChange, color }: Props) => {
  return (
    <div>
      <div className='color-picker'>
        <HexColorPicker
          onChange={onChange}
          color={color}
        />
      </div>
    </div>
  )
}
