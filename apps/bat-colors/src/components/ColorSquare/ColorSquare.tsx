// import React from 'react'
import styles from './ColorSquare.module.css'

interface Props {
  children?: React.ReactNode
  color?: string
  shade?: string
  showLabel?: boolean
}
export const ColorSquare = ({ children, color, shade, showLabel }: Props) => {
  return (
    <div className={styles.square}>
      <div
        className={styles.color}
        style={{
          backgroundColor: color
        }}>
        <p>{shade}</p>
      </div>

      {showLabel && <p className={styles.text}>{color}</p>}

      {children}
    </div>
  )
}
