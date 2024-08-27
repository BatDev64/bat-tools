import { twMerge } from 'tailwind-merge'

/* interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  children?: React.ReactNode
}
 */

interface InputP extends React.InputHTMLAttributes<HTMLInputElement> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  className?: string
  placeholder?: string
}

export function Input({ className, placeholder, startElement, endElement, ...rest }: InputP) {
  const CLASS = twMerge(
    'block w-full py-1 ps-12 text-gray-900 border  rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 font-medium',
    className
  )
  return (
    <div className='w-full flex relative scale-text-sm'>
      <div className='flex items-center absolute inset-y-0 start-0 ps-3'>{startElement}</div>
      <input
        type='text'
        className={CLASS}
        placeholder={placeholder}
        {...rest}
      />
      <div className='flex items-center absolute inset-y-0 end-0 pe-3 pointer-events-none '>
        {endElement}
      </div>
    </div>
  )
}
/*
border-gray-300
  dark:placeholder-gray-400 
  dark:bg-gray-700 
  dark:border-gray-600
  dark:text-white 
  dark:focus:ring-blue-500 
  dark:focus:border-blue-500
*/
