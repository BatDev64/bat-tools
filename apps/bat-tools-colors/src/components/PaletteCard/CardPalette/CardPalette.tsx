import { ColorSwatch } from '../ColorSwatch/ColorSwatch'
import { List } from '../../ui/List/List'
import { usePaletteCard } from '../../../Hooks/usePaletteCard'
import { checkContrast } from '../../../utils/checkContrast'

export function CardPalette() {
  const {
    palette: { shades, id }
  } = usePaletteCard()
  const COLOR_SHADES = Object.entries(shades)
  return (
    <article>
      <List
        className='grid md:grid-cols-11 gap-x-2 gap-y-2'
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
    </article>
  )
}
