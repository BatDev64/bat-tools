import { CardButtons } from '../CardButtons/CardButtons'
import { CardInput } from '../CardInput/CardInput'

export function CardHeader({ children }: { children?: React.ReactNode }) {
  return (
    <header className='flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-2 items-end'>
      <div className='md:max-w-[180px] md:flex-1 w-full'>
        <CardInput />
      </div>
      <CardButtons />
      {children}
    </header>
  )
}
