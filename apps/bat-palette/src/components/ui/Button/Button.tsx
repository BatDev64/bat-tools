import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap  font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer [&_svg]:pointer-events-none  [&_svg]:shrink-0 [&_svg]:stroke-2 outline-none tracking-wider',
  {
    variants: {
      variant: {
        default: [
          'border',
          'border-border dark:border-border-dark',
          'focus:border-border-accent dark:focus:border-border-accent-dark',
          'bg-neutral-50 dark:bg-neutral-950',
          'hover:bg-neutral-100 dark:hover:bg-neutral-900',
          'active:bg-neutral-200 dark:active:bg-neutral-800',

          'text-text-primary dark:text-text-primary-dark',
          '[&_svg]:stroke-neutral-800',
          'dark:[&_svg]:stroke-neutral-200'
        ],
        neutral: [
          'border',
          'border-border dark:border-border-dark',
          'focus:border-border-accent dark:focus:border-border-accent-dark',
          'bg-neutral-200 dark:bg-neutral-900',
          'hover:bg-neutral-200 dark:hover:bg-neutral-800',
          'active:bg-neutral-300 dark:active:bg-neutral-700',

          'text-text-primary dark:text-text-primary-dark',
          '[&_svg]:stroke-neutral-800',
          'dark:[&_svg]:stroke-neutral-200'
        ],
        primary: [
          'border',
          'border-border dark:border-border-dark',
          'focus:border-border-accent dark:focus:border-border-accent-dark',
          'bg-primary-600 dark:bg-primary-400',
          'hover:bg-primary-700 dark:hover:bg-primary-500',
          'active:bg-primary-800 dark:active:bg-primary-600',

          'text-text-white dark:text-text-black',
          '[&_svg]:stroke-neutral-50',
          'dark:[&_svg]:stroke-neutral-950'
        ],
        outline: [
          'bg-transparent',
          'border ',
          'border-border dark:border-border-dark',
          'focus:border-border-accent dark:focus:border-border-accent-dark',
          'text-text-primary dark:text-text-primary-dark',
          'hover:text-primary-600 dark:hover:text-primary-300',
          'hover:bg-primary-100 dark:hover:bg-primary-900',
          'active:bg-primary-200 dark:active:bg-primary-800'
        ],
        ghost: [
          'bg-transparent',
          'border border-transparent',
          'focus:border-border-accent dark:focus:border-border-accent-dark',
          'text-text-primary dark:text-text-primary-dark',
          'hover:text-primary-600 dark:hover:text-primary-400',
          'hover:bg-primary-100 dark:hover:bg-primary-900',
          'active:bg-primary-200 dark:active:bg-primary-800'
        ]
      },
      size: {
        sm: 'px-3 py-2 text-sm h-8 [&_svg]:size-4',
        md: 'px-4 py-2.5 text-sm h-9 [&_svg]:size-4',
        lg: 'px-5 py-3 text-base h-10 [&_svg]:size-5',
        'icon-sm': 'p-1 [&_svg]:size-4 leading-none inline-block',
        icon: 'inline-block leading-none  p-1.5 [&_svg]:size-5',
        'icon-lg': 'inline-block leading-none  p-2 [&_svg]:size-5'
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'lg'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, rounded, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
