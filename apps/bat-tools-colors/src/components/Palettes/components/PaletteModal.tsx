/* eslint-disable no-useless-escape */
import { useCopyToBoard } from '../../../Hooks/useCopyToBoard'
import { PaletteType } from '../../../types'
import { PaletteCard } from '../../PaletteCard/PaletteCard'
import { Button } from '../../ui/Button/Button'

type PaletteModalProps = Pick<PaletteType, 'shades'>

const PaletteModal = ({ shades }: PaletteModalProps) => {
  const { isCopied, copyToBoard } = useCopyToBoard()

  const stringSahdes = JSON.stringify(shades, null, 2).replace(/\"/g, "'")

  const handleCopy = (text: string) => copyToBoard(text)

  return (
    <PaletteCard.CardModal>
      <Button
        className={`self-end border ${isCopied ? ' border-green-500' : ''} bg-indigo-100 text-indigo-700`}
        onClick={() => handleCopy(stringSahdes)}>
        {isCopied ? 'Text Copied!' : 'Copy'}
      </Button>
      <p
        style={{ whiteSpace: 'pre-wrap' }}
        className='font-medium text-slate-600'>
        {stringSahdes}
      </p>
    </PaletteCard.CardModal>
  )
}

export default PaletteModal
