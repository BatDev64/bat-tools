import { forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

type ButttonProps = React.HTMLAttributes<HTMLButtonElement>

type Props = ButttonProps & {
  isIcon?: boolean
  size?: 'md' | 'xs'
  radius?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      size = 'md',
      radius = 'md',
      isIcon = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'button-base',
          'color-button-default',
          !isIcon && styles[`size-button-${size}`],
          isIcon && styles[`size-button-icon-${size}`],
          isIcon && styles[`rounded-button-${radius}`],
          className
        )}
        {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
