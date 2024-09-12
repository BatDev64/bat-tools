import { Button } from '../../ui/Button/Button'

interface CardButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const CardButton: React.FC<CardButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={`
        bg-transparent
        hover:bg-logan-100
        p-2
        text-sm
     text-logan-700
     hover:text-royal-blue-700
     active:text-royal-blue-800
     `}>
        {children}
      </Button>
    </>
  )
}

export default CardButton
