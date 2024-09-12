import { useCreatePalette } from '../../Hooks/storeHooks/useCreatePalette'
import { usePalettes, useSelectedPalettes } from '../../Hooks/storeHooks/usePalettes'
import { ExampleUI } from '../ExampleUI/ExampleUI'
import { Add } from '../Icons/Add'
import { Palettes } from '../Palettes/Palettes'
import { SelectedPalettes } from '../Palettes/SelectedPalettes'
import { Button } from '../ui/Button/Button'
import * as Tabs from '@radix-ui/react-tabs'
import debounce from 'just-debounce-it'
import { useEditPalettes } from '../../Hooks/storeHooks/useEditPalettes'
import { useEffect, useState } from 'react'
import ColorPicker from '../ui/Input/ColorPicker'

const TABS_TRIGGER = `
  px-4
  py-2
  text-sm
  text-logan-700
  font-medium
  rounded
  hover:bg-royal-blue-100
  hover:text-royal-blue-700
  data-[state=active]:border-b-2
  data-[state=active]:border-b-royal-blue-500
  data-[state=active]:rounded-b-none
  data-[state=active]:text-royal-blue-700
  data-[state=active]:font-bold

`

export function Main() {
  const palettes = usePalettes()
  const selectedPalettes = useSelectedPalettes()
  const createPalette = useCreatePalette()
  const editPalettes = useEditPalettes()

  const firstColor = palettes.length > 0 ? palettes[0]['current-color'] : ''

  const [currentColor, setCurrentColor] = useState(firstColor)
  useEffect(() => setCurrentColor(firstColor), [firstColor])
  const handleDebounce = debounce((newColor: string) => {
    editPalettes(newColor)
  }, 400)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetColor = e.target.value

    if (targetColor && targetColor.length > 7) {
      return
    }
    setCurrentColor(targetColor)

    handleDebounce(targetColor)
  }

  return (
    <main className='overflow-hidden my-4 flex flex-col gap-8'>
      <ColorPicker
        placeholder={currentColor}
        value={currentColor}
        onChange={handleChange}
      />
      <Tabs.Root
        defaultValue='create'
        className='flex flex-col divide-y divide-logan-200  rounded-md'>
        <Tabs.List className='flex justify-end gap-2  p-1 rounded-t-md'>
          <Tabs.TabsTrigger
            value='create'
            className={TABS_TRIGGER}>
            Create
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value='saved'
            className={`${TABS_TRIGGER}`}>
            Saved
          </Tabs.TabsTrigger>
        </Tabs.List>
        <Tabs.Content
          value='create'
          className='p-4 '>
          <section className='relative flex flex-col gap-6'>
            <Palettes palettes={palettes} />
            <div className='sticky bottom-0 flex justify-center'>
              <Button
                onClick={() => createPalette()}
                className='rounded-md text-logan-700 bg-transparent hover:text-logan-800 active:text-logan-900 p-1 pr-2'>
                <span>
                  <Add className='size-5 fill-logan-700 hover:fill-logan-800 active:fill-logan-900' />
                </span>
                Add color
              </Button>
            </div>
          </section>
        </Tabs.Content>
        <Tabs.Content
          value='saved'
          className='p-4 max-h-[50vh]  overflow-y-auto'>
          <section className=''>
            <SelectedPalettes palettes={selectedPalettes} />
          </section>
        </Tabs.Content>
      </Tabs.Root>
      {palettes.length > 0 && <ExampleUI palettes={palettes} />}
    </main>
  )
}
