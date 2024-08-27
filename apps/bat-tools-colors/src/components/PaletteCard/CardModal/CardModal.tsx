import { usePaletteCard } from '../../../Hooks/usePaletteCard'
import { Modal } from '../../ui/Modal/Modal'
import { Button } from '../../ui/Button/Button'
import { useCopyToBoard } from '../../../Hooks/useCopyToBoard'

export function CardModal() {
  const { isCopied, copyToBoard } = useCopyToBoard()

  const {
    palette: { shades },
    modalIsOpen,
    setModalIsOpen
  } = usePaletteCard()

  const stringSahdes = JSON.stringify(shades, null, 2).replace(/\"/g, "'")

  const handleCopy = () => copyToBoard(stringSahdes)
  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      className='bg-slate-100'>
      <article className='flex flex-col p-4  '>
        <Button
          className={`self-end border ${isCopied ? ' border-green-500' : ''} bg-indigo-100 text-indigo-700`}
          onClick={handleCopy}>
          {isCopied ? 'Text Copied!' : 'Copy'}
        </Button>
        <p
          style={{ whiteSpace: 'pre-wrap' }}
          className='font-medium text-slate-600'>
          {stringSahdes}
        </p>
      </article>
    </Modal>
  )
}
