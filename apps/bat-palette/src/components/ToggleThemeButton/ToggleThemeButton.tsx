import { useTheme } from '#hooks/useTheme.tsx'
import { Button, Moon, Sun } from '#components/ui'

export const ToggleThemeButton = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Button
      size='icon-lg'
      rounded='full'
      onClick={toggleTheme}>
      {theme === 'dark' ?
        <Sun />
      : <Moon />}
    </Button>
  )
}
