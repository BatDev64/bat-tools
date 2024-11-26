import { Button } from '../Button/Button'
import { useModal } from './useModal'

interface Props {
  children: React.ReactNode
}

export const Trigger = ({ children }: Props) => {
  const { openModal } = useModal()
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation()
        openModal()
      }}>
      {children}
    </Button>
  )
}
