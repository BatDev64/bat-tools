import { useModalIsOpen } from '../../../Hooks/storeHooks/useModalIsOpen'
import { Modal } from '../../ui/Modal/Modal'

type ModalProps = {
  children: React.ReactNode
}

export const CardModal = ({ children }: ModalProps) => {
  const { toggleModal, modalIsOpen } = useModalIsOpen()
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => toggleModal()}
        className='bg-slate-100'>
        <article className='flex flex-col p-4  '>{children}</article>
      </Modal>
    </>
  )
}

export default Modal
