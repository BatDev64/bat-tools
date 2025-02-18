import { type PaletteSteps } from '#/models/palette.types'
import { checkContrast } from '#utils/checkContrast.ts'

interface Props {
  children?: React.ReactNode
  shades: PaletteSteps
}

export const Palette = ({ shades }: Props) => {
  const colors = Object.entries(shades)

  return (
    <ul className='grid grid-cols-11 gap-1 sm:gap-2 w-full'>
      {colors.map(([label, hex]) => {
        const colorNumber = checkContrast(hex)
        return (
          <li
            key={`color-palette-${label}-${hex}`}
            className='flex flex-col text-center gap-2'>
            <div
              className='aspect-square flex flex-col items-center justify-center rounded-lg border border-border dark:border-border-dark'
              style={{ backgroundColor: hex }}>
              <span
                className='hidden 2xs:block text-xs font-bold'
                style={{ color: colorNumber }}>
                {label}
              </span>
            </div>
            <span className='hidden sm:block text-xs text-text-body dark:text-text-body-dark'>
              {hex}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
