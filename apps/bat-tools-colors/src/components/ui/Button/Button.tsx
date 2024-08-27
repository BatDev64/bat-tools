import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...rest }: ButtonProps) {
  const CLASS = twMerge('btn-base bg-indigo-500 text-white px-4 py-2 rounded-md', className)
  return (
    <button
      className={CLASS}
      {...rest}>
      {children}
    </button>
  )
}
