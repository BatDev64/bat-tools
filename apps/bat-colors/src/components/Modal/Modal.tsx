import { createContext, useCallback, useState } from 'react'
import { Portal } from './Portal'
import { Trigger } from './Trigger'
import { CloseModal } from './CloseModal'
import { Content } from './Content'

interface ModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
)

interface Props {
  children: React.ReactNode
}

export const Modal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal
      }}>
      {children}
    </ModalContext.Provider>
  )
}

Modal.Portal = Portal
Modal.Content = Content
Modal.Trigger = Trigger
Modal.CloseModal = CloseModal
