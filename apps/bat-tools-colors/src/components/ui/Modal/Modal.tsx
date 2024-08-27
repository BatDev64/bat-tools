import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button/Button'
import { Close } from '../../Icons/Close'

interface ModalProps {
  children?: React.ReactNode
  className?: string
  title?: string
  onClose: () => void
  isOpen: boolean
}

const mountElement = document.getElementById('color-modal')

export function Modal({ isOpen, children, onClose, className, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  if (!mountElement || !isOpen) return null

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose()
    }
  }

  const CLASS = twMerge(
    'w-full p-4 rounded-md flex flex-col justify-center gap-4 bg-gray-100',
    className
  )

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      onClick={closeModal}
      className='bg-gray-800/50 size-60 fixed z-10 inset-0 w-full h-[100vh] flex flex-col justify-center'
      role='dialog'
      aria-modal='true'>
      <div className='wrapper w-full flex justify-center'>
        <div className={CLASS}>
          <div className='flex justify-between'>
            <h3 className='text-xl font-medium'>{title}</h3>
            <Button
              onClick={onClose}
              className='bg-slate-200 p-2'>
              <Close className='size-5 fill-slate-600' />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    mountElement
  )
}
