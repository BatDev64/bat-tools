import { Color } from './Color'
import { Input } from './Input'

interface ColorPickerProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  value?: string | number | readonly string[]
  onChange?: React.FormEventHandler<HTMLInputElement>
}

const ColorPicker = ({
  placeholder,
  value,
  onChange,
  'aria-label': ariaLabel,
  ...rest
}: ColorPickerProps) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        value={value}
        aria-label={ariaLabel || 'Color Picker'}
        {...rest}
        onChange={onChange}
        startElement={
          <Color
            value={value}
            onChange={onChange}
          />
        }
      />
    </>
  )
}

export default ColorPicker
