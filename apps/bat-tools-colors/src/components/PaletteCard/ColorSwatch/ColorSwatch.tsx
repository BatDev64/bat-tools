import { twMerge } from 'tailwind-merge'

interface ColorSwatchProp extends React.HTMLAttributes<HTMLDivElement> {
  shade?: string
  color?: string
  className?: string
}

export function ColorSwatch({ shade, color, className, ...rest }: ColorSwatchProp) {
  const CLASS = twMerge('scale-text-xs', className)
  return (
    <div
      className={CLASS}
      {...rest}>
      <header
        className='px-3 py-2 rounded-md font-medium'
        style={{
          backgroundColor: color
        }}>
        <p className=''>{shade}</p>
        <p className='opacity-70'>{color}</p>
      </header>
    </div>
  )
}
