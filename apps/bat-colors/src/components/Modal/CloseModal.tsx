import clsx from 'clsx'
import { Button } from '../Button/Button'
import { CancelIcon } from '../Icons/Cancel'
import { useModal } from './useModal'
import styles from './Modal.module.css'

interface Props {
  className?: string
}

export const CloseModal = ({ className }: Props) => {
  const { closeModal } = useModal()
  return (
    <Button
      isIcon
      size='xs'
      radius='base'
      className={clsx(styles.close, className)}
      onClick={closeModal}>
      <CancelIcon
        width={16}
        height={16}
      />
    </Button>
  )
}
