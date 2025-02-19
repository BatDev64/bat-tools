import { Github } from '../ui/Icons'

export const Footer = () => {
  return (
    <footer className='bg-white/30 dark:bg-black/30 backdrop-blur-sm w-full py-2.5 border-t border-border dark:border-border-dark mt-8'>
      <div className='wrapper flex items-center'>
        <p className=' text-text-secondary dark:text-text-secondary-dark text-sm'>
          Made by{' '}
          <a
            href='https://github.com/BatDev64'
            className='font-bold underline'
            target='_blank'>
            BatDev64
          </a>
        </p>
        <div className='flex-1 flex justify-end '>
          <a
            href='https://github.com/BatDev64'
            className='font-medium text-sm hover:underline inline-flex gap-1 items-center [&_svg]:size-4 '
            target='_blank'>
            <Github />
            <span>BatDev64</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
