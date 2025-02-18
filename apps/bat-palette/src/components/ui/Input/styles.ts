import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'w-full p-2.5  rounded-full h-11 border outline-none',
  {
    variants: {
      variant: {
        default: [
          'bg-surface dark:bg-surface-dark',
          'text-text-black dark:text-text-white',
          'placeholder:text-text-placeholder dark:placeholder:text-text-placeholder-dark',
          'border-border dark:border-border-dark ',
          'focus:border-border-accent dark:focus:border-border-accent-dark'
        ],
        muted: [
          'bg-surface-muted dark:bg-surface-muted-dark',
          'text-text-black dark:text-text-white',
          'placeholder:text-text-placeholder dark:placeholder:text-text-placeholder-dark',
          'border-border dark:border-border-dark ',
          'focus:border-border-accent dark:focus:border-border-accent-dark'
        ]
      },
      rounded: {
        full: 'rounded-full',
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg'
      }
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'md'
    }
  }
)
