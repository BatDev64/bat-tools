import { colorScale } from '@bat-tools/colors'
import { type ColorScale } from './models/types'
import { ColorList } from './components/ColorList/ColorList'
import { ColorSquare } from './components'
import styles from './App.module.css'

const defaultScales: ColorScale = colorScale('8683a5')
const nameSacale = Object.keys(defaultScales)[0]
const shades = defaultScales[nameSacale]

function App() {
  return (
    <div className='wrapper'>
      <section className={styles.layout}>
        <header className={styles.header}>
          <h1>Bat Colors</h1>
        </header>
        <main className={styles.main}>
          <ColorSquare color={shades[500]} />
          <ColorList
            shades={shades}
            nameColor={nameSacale}
          />

          <pre>
            <code>{JSON.stringify(defaultScales, null, 2)}</code>
          </pre>
        </main>
        <footer className={styles.footer}></footer>
      </section>
    </div>
  )
}

export default App
