import clsx from 'clsx'
import { HexColorPicker } from 'react-colorful'

interface Props {
  color?: string
  onChange?: (newColor: string) => void
  className?: string
}
export const ColorPIcker = ({ color, onChange, className }: Props) => {
  return (
    <div className={clsx('color-picker_custom', className)}>
      <HexColorPicker
        color={color}
        onChange={onChange}
      />
    </div>
  )
}
