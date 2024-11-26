import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useModal } from './useModal'
import styles from './Modal.module.css'

interface Props {
  children: React.ReactNode
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement

export const Portal = ({ children }: Props) => {
  const { isOpen } = useModal()
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) elRef.current = document.createElement('div')

  useEffect(() => {
    const el = elRef.current!
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  if (!isOpen) return null

  const overlay = <div className={styles.overlay}>{children}</div>

  return ReactDOM.createPortal(overlay, elRef.current)
}
