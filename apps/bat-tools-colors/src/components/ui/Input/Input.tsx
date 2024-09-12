interface InputP extends React.HTMLAttributes<HTMLInputElement> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  className?: string
  placeholder?: string
  value?: string | number | readonly string[]
}

export function Input({
  placeholder,
  value,
  startElement,
  endElement,
  'aria-label': ariaLabel,
  ...rest
}: InputP) {
  return (
    <div className='w-full flex items-center relative scale-text-sm'>
      <div className='flex z-10 items-center absolute inset-y-0 start-0 ps-3'>{startElement}</div>
      <input
        type='text'
        className='w-full border-2 border-logan-200 rounded-full focus:outline-royal-blue-400 focus:border-royal-blue-400 ps-9 py-1 bg-logan-50 text-logan-900 placeholder:text-logan-700'
        placeholder={placeholder}
        value={value}
        aria-label={ariaLabel || placeholder}
        {...rest}
      />
      <div className='flex z-10 items-center absolute inset-y-0 end-0 pe-3'>{endElement}</div>
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
