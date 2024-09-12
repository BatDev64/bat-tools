import { PaletteType } from '../../../types'
import { ColorSwatch } from './PaletteCardColorSwatch'
import { checkContrast } from '../../../utils/checkContrast'
import { List } from '../../ui/List/List'

type PaletteProps = Pick<PaletteType, 'shades' | 'id'>

const Shades: React.FC<PaletteProps> = ({ shades, id }) => {
  const COLOR_SHADES = Object.entries(shades)
  return (
    <List
      className='grid md:grid-cols-11 gap-x-1 gap-y-2'
      items={COLOR_SHADES}
      keyItem={([shade, color]) => `${shade}-${color}-${id}`}
      renderItem={([shade, color]) => {
        const lightColor = shades['50']
        const darkColor = shades['950']

        const text = checkContrast(darkColor, color) ? darkColor : lightColor
        console.log(checkContrast(lightColor, color))

        return (
          <ColorSwatch
            color={color}
            shade={shade}
            style={{
              color: text
            }}
          />
        )
      }}
    />
  )
}

export default Shades
