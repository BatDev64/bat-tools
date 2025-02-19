import { Header } from '#components/Header/Header'
import { usePalette } from '#hooks/usePalette'
import { useCustomProperties } from '#hooks/useCustomProperties'
import { PaletteList } from '#components/App/PaletteList.tsx'
import { Navbar } from '#components/Navbar/Navbar.tsx'
import { ColorPreview } from '#components/ColorPreview/ColorPreview.tsx'
import { Footer } from '#components/Footer/Footer.tsx'

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
      <main className='relative mt-10'>
        <div className='wrapper w-full flex flex-col gap-8'>
          <PaletteList />
          <ColorPreview />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
