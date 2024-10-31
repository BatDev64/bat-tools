import { type Shades } from '../../models/types'
import { ColorSquare } from '../ColorSquare/ColorSquare'
import styles from './ColorList.module.css'

interface Props {
  shades: Shades
  nameColor: string
}

export const ColorList = ({ shades, nameColor }: Props) => {
  const colors = Object.entries(shades)

  return (
    <ul className={styles.container}>
      {colors.map(([shade, color]) => {
        return (
          <li key={`${nameColor}-${color}-${shade}`}>
            <ColorSquare
              color={color}
              shade={shade}
              showLabel
            />{' '}
          </li>
        )
      })}
    </ul>
  )
}
