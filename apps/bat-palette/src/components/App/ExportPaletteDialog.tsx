import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '#components/ui'
import { Close } from '#/components/ui/Icons'
import {
  type ColorCategory,
  type Format,
  type FormatsWithoutOKLCH
} from '#/models/palette.types'
import { usePalette } from '#/hooks/usePalette'
import { useClipboard } from '#/hooks/useClipboard'
import { Copy, CopyCheck, FileDown } from '#/components/ui/Icons'

// Opciones para cada tab
const objectFormatOptions: ReadonlyArray<FormatsWithoutOKLCH> = [
  'hex',
  'rgb',
  'hsl'
]
const varFormatOptions: ReadonlyArray<Format> = ['hex', 'rgb', 'hsl', 'oklch']

interface Props {
  category: ColorCategory
}

export const ExportPaletteDialog = ({ category }: Props) => {
  const { getObjectScales, getVarScales } = usePalette()

  // Estados para almacenar el formato seleccionado en cada tab
  const [objectFormat, setObjectFormat] = useState<FormatsWithoutOKLCH>('hex')
  const [varFormat, setVarFormat] = useState<Format>('hex')

  const { copyToboard, isCopied } = useClipboard()

  const textObjectFormat = getObjectScales(category, objectFormat)
  const textVarFormat = getVarScales(category, varFormat)

  const handleCopyObjectFormat = () => {
    copyToboard(textObjectFormat)
  }
  const handleCopyVarFormat = () => {
    copyToboard(textVarFormat)
  }

  const textIsCopied = isCopied ? 'Copied!' : 'Copy'
  const copyIcon = isCopied ? <CopyCheck /> : <Copy />

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='icon-sm'>
          <FileDown />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[90vw] max-w-4xl'>
        <DialogTitle>Export</DialogTitle>
        <Tabs
          defaultValue='tailwind3'
          className='grow flex flex-col'>
          <TabsList>
            <TabsTrigger value='tailwind3'>Tailwind 3</TabsTrigger>
            <TabsTrigger value='tailwind4'>Tailwind 4</TabsTrigger>
          </TabsList>
          {/* Tab Tailwind 3: Object Scales */}
          <TabsContent
            value='tailwind3'
            className='relative h-[70vh] overflow-clip overflow-y-auto overflow-x-auto custom-scroll'>
            {/* Selector de formato */}
            <div className='mb-4 flex flex-wrap items-center gap-4'>
              {objectFormatOptions.map((opt) => (
                <label
                  key={opt}
                  className='bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800  py-1.5 pl-2 pr-2.5 inline-flex items-center gap-3 rounded-xl text-text-primary dark:text-text-primary-dark font-medium text-sm cursor-pointer border border-neutral-300 dark:border-neutral-500 has-checked:bg-primary-100 has-checked:border-primary-300 dark:has-checked:bg-primary-900 dark:has-checked:border-primary-500'>
                  <input
                    type='radio'
                    name='objectFormat'
                    value={opt}
                    checked={objectFormat === opt}
                    onChange={() => setObjectFormat(opt)}
                    className='accent-primary-500 dark:accent-primary-400'
                  />
                  {opt.toUpperCase()}
                </label>
              ))}
            </div>
            <pre>
              <code className='text-sm text-text-body dark:text-text-body-dark font-medium'>
                {textObjectFormat}
              </code>
            </pre>
            <Button
              size='md'
              className='fixed bottom-8 right-16 z-50'
              onClick={handleCopyObjectFormat}>
              {copyIcon}
              <span className='hidden sm:block'>{textIsCopied}</span>
            </Button>
          </TabsContent>
          {/* Tab Tailwind 4: Var Scales */}
          <TabsContent
            value='tailwind4'
            className='relative h-[70vh] overflow-clip overflow-y-auto overflow-x-auto custom-scroll'>
            {/* Selector de formato */}
            <div className='mb-4 flex flex-wrap items-center gap-4'>
              {varFormatOptions.map((opt) => (
                <label
                  key={opt}
                  className='bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800  py-1.5 pl-2 pr-2.5 inline-flex items-center gap-3 rounded-xl text-text-primary dark:text-text-primary-dark font-medium text-sm cursor-pointer border border-neutral-300 dark:border-neutral-500 has-checked:bg-primary-100 has-checked:border-primary-300 dark:has-checked:bg-primary-900 dark:has-checked:border-primary-500'>
                  <input
                    type='radio'
                    name='varFormat'
                    value={opt}
                    checked={varFormat === opt}
                    onChange={() => setVarFormat(opt)}
                    className='accent-primary-500 dark:accent-primary-400'
                  />
                  {opt.toUpperCase()}
                </label>
              ))}
            </div>
            <pre>
              <code className='text-sm text-text-body dark:text-text-body-dark font-medium'>
                {textVarFormat}
              </code>
            </pre>
            <Button
              size='md'
              className='fixed bottom-8 right-16 z-50'
              onClick={handleCopyVarFormat}>
              {copyIcon}
              <span className='hidden sm:block'>{textIsCopied}</span>
            </Button>
          </TabsContent>
        </Tabs>
        <DialogClose
          className='absolute top-0 right-0 mt-2 mr-2'
          asChild>
          <Button size='icon'>
            <Close />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
