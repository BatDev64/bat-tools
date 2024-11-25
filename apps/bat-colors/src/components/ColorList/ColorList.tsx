import { type ColorScaleWithId } from '../../models/types'
import SquareIcon from '../Icons/Square'
import styles from './ColorList.module.css'

type Props = ColorScaleWithId

export const ColorList = ({ shades, name, id }: Props) => {
  const colors = Object.entries(shades)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <ul className={styles.container}>
        {colors.map(([shade, color]) => {
          return (
            <li key={`${id}-${shade}`}>
              <div className={styles.color}>
                <div className={styles['color-square']}>
                  <SquareIcon
                    fill={color}
                    className={styles.svg}
                  />
                  <p>{color}</p>
                </div>
                <p>{shade}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
