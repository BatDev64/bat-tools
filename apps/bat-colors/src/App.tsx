import { colorScale } from '@bat-tools/colors'
import { type ColorScale } from './models/types'
import { ColorList } from './components/ColorList/ColorList'
import { ColorSquare } from './components'

const defaultScales: ColorScale = colorScale('8683a5')
const nameSacale = Object.keys(defaultScales)[0]
const shades = defaultScales[nameSacale]

function App() {
  return (
    <div className='wrapper'>
      <h1>Bat Colors</h1>
      <ColorSquare color={shades[500]} />
      <ColorList
        shades={shades}
        nameColor={nameSacale}
      />

      <pre>
        <code>{JSON.stringify(defaultScales, null, 2)}</code>
      </pre>
    </div>
  )
}

export default App
