import { type ColorCategory } from '#/models/palette.types'
import { Button } from '#components/ui'

import { ExportPaletteDialog } from './ExportPaletteDialog'

import { Copy, CopyCheck } from '#/components/ui/Icons'
import { useClipboard } from '#/hooks/useClipboard'
import { usePalette } from '#/hooks/usePalette'
import { Palette } from '#components/Palette/Palette.tsx'

const categories: ReadonlyArray<ColorCategory> = [
  'primary',
  'secondary',
  'neutral'
]

export const PaletteList = () => {
  const { getVarScales, selectedColors } = usePalette()

  const { copyToboard, isCopied } = useClipboard()
  const copyIcon = isCopied ? <CopyCheck /> : <Copy />

  const handleCopy = (text: string) => {
    copyToboard(text)
  }

  return (
    <section className='flex flex-col gap-8 w-full'>
      {Object.entries(selectedColors).map(([key, palette], index) => {
        const textVarFormat = getVarScales(categories[index], 'hex')

        return (
          <div
            className='relative'
            key={`palette-${key}-${index}`}>
            <div className='flex items-center gap-4 mb-4'>
              <h3 className='text-base md:text-lg text-text-primary dark:text-text-primary-dark font-medium flex-1'>
                {palette.name}
              </h3>
              <div className='flex items-center gap-2'>
                <ExportPaletteDialog category={categories[index]} />

                <Button
                  size='icon-sm'
                  onClick={() => handleCopy(textVarFormat)}>
                  {copyIcon}
                </Button>
              </div>
            </div>

            <Palette shades={palette.colorScales.hex} />
          </div>
        )
      })}
    </section>
  )
}
