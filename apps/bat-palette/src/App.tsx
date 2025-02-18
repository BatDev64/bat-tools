import { Header } from '#components/Header/Header'
import { usePalette } from '#hooks/usePalette'
import { useCustomProperties } from '#hooks/useCustomProperties'

function App() {
  const { selectedColors } = usePalette()

  const allShades = Object.entries(selectedColors).map(
    ([, s]) => s.colorScales.hex
  )
  useCustomProperties(allShades, ['primary', 'secondary', 'neutral'])

  return (
    <div>
      <div className='wrapper mt-8'>
        <Header />
      </div>
    </div>
  )
}

export default App
