import { type VariantProps } from 'class-variance-authority'
import { inputVariants } from './styles'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    VariantProps<typeof inputVariants> {
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
}

export const Input = ({
  variant,
  elementLeft,
  elementRight,
  className,
  ...props
}: Props) => {
  return (
    <div className='inline-flex w-full items-center relative'>
      {elementLeft}
      <input
        {...props}
        className={inputVariants({ variant, className })}
      />
      {elementRight}
    </div>
  )
}
