import clsx from 'clsx'
import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const InputRadio = ({ label, className, ...props }: Props) => {
  return (
    <label className='inline-flex items-center gap-2 py-1 pl-2 pr-2.5 bg-bg-card/10 hover:bg-button-white-bg-fill cursor-pointer rounded-full border border-button-white-stroke group has-[:checked]:border-highlight has-[:checked]:bg-highlight/10 [&_svg]:has-[:checked]:block [&_svg]:size-4'>
      <input
        type='checkbox'
        className={clsx(
          'form-checkbox bg-input-radio-bg-secondary focus:outline-highlight focus:ring-highlight border border-transparent checked:bg-highlight checked:hover:bg-primary-700 checked:focus:bg-highlight rounded-full peer/box checked:outline-highlight checked:ring-highlight',
          className
        )}
        {...props}
      />
      <span className='group-hover:text-highlight peer-checked/box:text-highlight text-sm truncate'>
        {label}
      </span>
    </label>
  )
}
