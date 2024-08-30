import { PaletteCard } from './components/PaletteCard/PaletteCard'
import { Button } from './components/ui/Button/Button'
import { Add } from './components/Icons/Add'
import { usePalettes } from './Hooks/storeHooks/usePalettes'
import { useCreatePalette } from './Hooks/storeHooks/useCreatePalette'

function App() {
  const palettes = usePalettes()
  const createPalette = useCreatePalette()

  return (
    <div className='wrapper'>
      <header className='text-center'>
        <h1 className='scale-text-lg font-bold uppercase'>Bat tools color palette generator</h1>
      </header>
      <section className='relative flex flex-col gap-4'>
        <ul className='flex flex-col gap-8 '>
          {palettes.map((palette) => {
            return (
              <li key={palette.id}>
                <PaletteCard colorPalette={palette} />
              </li>
            )
          })}
        </ul>
        <div className='sticky inset-0 flex justify-center py-2'>
          <Button
            onClick={() => createPalette()}
            className='p-4 rounded-md bg-slate-50 text-indigo-700 shadow-xl'>
            Add color
            <span>
              <Add className='size-6 fill-indigo-700' />
            </span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App
