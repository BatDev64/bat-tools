import { ColorPickerInput } from '#components/ColorPickerInput/ColorPickerInput'
import { ToggleThemeButton } from '#components/ToggleThemeButton/ToggleThemeButton.tsx'
import { usePalette } from '#hooks/usePalette.ts'

export const Navbar = () => {
  const { mainColor, setMainColor } = usePalette()
  const handleChangeColor = (color: string) => {
    setMainColor(color)
  }

  return (
    <div className='bg-white/30 dark:bg-black/30 backdrop-blur-sm top-0 sticky z-50 w-full py-4 border-y border-border dark:border-border-dark'>
      <div className='wrapper flex items-center gap-2 sm:gap-4'>
        <div>
          <h2 className='font-black text-text-primary dark:text-text-primary-dark text-2xl sm:hidden'>
            BP
          </h2>
          <h2 className='font-black text-text-primary dark:text-text-primary-dark text-2xl hidden sm:block'>
            BatPalette
          </h2>
        </div>
        <div className='flex-1 flex items-center justify-between gap-2 sm:gap-4'>
          <ColorPickerInput
            mainColor={mainColor}
            onChangeColor={handleChangeColor}
          />

          <ToggleThemeButton />
        </div>
      </div>
    </div>
  )
}
