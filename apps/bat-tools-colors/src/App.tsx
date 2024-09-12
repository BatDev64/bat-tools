import { Main } from './components/Main/Main'

/* 1edc34  489cea*/


/* console.log(gCs('#489cea')) */
function App() {
  return (
    <div className='wrapper flex flex-col'>
      <header className='text-center'>
        <h1 className='scale-text-lg font-bold uppercase'>Bat tools color palette generator</h1>
      </header>

      <Main />
    </div>
  )
}

export default App
/*       <PaletteCard colorPalette={{
        id: '1',
        "current-color": '#489cea',
        isSaved: false,
        shades: P
      }}>

      </PaletteCard> */