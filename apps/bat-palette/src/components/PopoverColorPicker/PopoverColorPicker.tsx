import {
  Button,
  ColorPIcker,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '#components/ui'

interface Props {
  children?: React.ReactNode
  mainColor: string
  onChangeColor: (color: string) => void
}

export const PopoverColorPicker = ({ mainColor, onChangeColor }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className='border-none border border-transparent'
          size='icon-lg'
          variant='neutral'
          rounded='full'>
          <span
            className='size-4 rounded-full border border-border dark:border-border-dark'
            style={{ backgroundColor: mainColor }}></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ColorPIcker
          color={mainColor}
          onChange={onChangeColor}
        />
      </PopoverContent>
    </Popover>
  )
}
