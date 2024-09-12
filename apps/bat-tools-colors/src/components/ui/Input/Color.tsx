import { twMerge } from 'tailwind-merge'

type InputColorPickerProps = React.InputHTMLAttributes<HTMLInputElement>

export function Color({ className, ...rest }: InputColorPickerProps) {
  const CLASS = twMerge('size-5', className)
  return (
    <div className={CLASS}>
      <input
        type='color'
        aria-label='Select color'
        {...rest}
      />
    </div>
  )
}
