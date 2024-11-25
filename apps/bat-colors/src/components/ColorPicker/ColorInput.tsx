import { HexColorInput } from 'react-colorful'
import styles from './ColorPicker.module.css'

interface Props {
  color: string
  onChange: (newColor: string) => void
}

export const ColorInput = ({ onChange, color }: Props) => {
  return (
    <HexColorInput
      className={styles.input}
      onChange={onChange}
      color={color}
    />
  )
}
