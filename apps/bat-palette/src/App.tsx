import { Header } from '#components/Header/Header'
import { usePalette } from '#hooks/usePalette'
import { useCustomProperties } from '#hooks/useCustomProperties'
import { PaletteList } from '#components/App/PaletteList.tsx'
import { Navbar } from '#components/Navbar/Navbar.tsx'

function App() {
  const { selectedColors } = usePalette()

  const allShades = Object.entries(selectedColors).map(
    ([, s]) => s.colorScales.hex
  )
  useCustomProperties(allShades, ['primary', 'secondary', 'neutral'])

  return (
    <div>
      <Navbar />
      <div className='wrapper mt-8'>
        <Header />
      </div>
      <main className='flex flex-col gap-4 mt-8 relative'>
        <div className='wrapper w-full flex flex-col gap-16'>
          <PaletteList />
        </div>
      </main>
    </div>
  )
}

export default App
