import { type VariantProps } from 'class-variance-authority'
import { HexColorInput } from 'react-colorful'
import { inputVariants } from '../Input'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    VariantProps<typeof inputVariants> {
  color?: string
  onChange?: (newColor: string) => void
}

export const InputColorPicker = ({
  color,
  onChange,
  variant,
  className,
  ...props
}: Props) => {
  return (
    <HexColorInput
      color={color}
      onChange={onChange}
      {...props}
      className={inputVariants({ variant, className })}
    />
  )
}
