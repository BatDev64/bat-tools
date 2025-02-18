import { InputColorPicker } from '#components/ui'
import { ExportAllPalettesDialog } from '../ExportAllPalettesDialog/ExportAllPalettesDialog'
import { PopoverColorPicker } from '../PopoverColorPicker/PopoverColorPicker'

interface Props {
  mainColor: string
  onChangeColor: (color: string) => void
}

export const ColorPickerInput = ({ mainColor, onChangeColor }: Props) => {
  return (
    <div className='inline-flex items-center relative w-full flex-1'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-2 z-20'>
        <PopoverColorPicker
          mainColor={mainColor}
          onChangeColor={onChangeColor}
        />
      </div>

      <label
        htmlFor='input-color-picker'
        className='absolute inset-y-0 start-0 flex items-center ps-12 z-10 text-text-primary dark:text-text-primary-dark text-sm font-medium'>
        HEX:
      </label>

      <InputColorPicker
        id='input-color-picker'
        placeholder={mainColor}
        color={mainColor}
        onChange={onChangeColor}
        type='text'
        className='ps-22 rounded-none rounded-l-full'
      />

      <ExportAllPalettesDialog />
    </div>
  )
}
