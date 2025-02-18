import { Bookmark, House, Mail, Music, User } from '#components/ui/Icons'

export const Sidebar = () => {
  return (
    <aside className='w-full h-full bg-surface dark:bg-surface-dark text-text-primary dark:text-text-primary-dark p-4 rounded-2xl border border-border dark:border-border-dark shadow'>
      <nav>
        <ul className='[&_li]:hover:bg-primary-200 dark:[&_li]:hover:bg-primary-800 [&_li]:px-2 [&_li]:py-2 [&_li]:rounded-xl [&_li]:cursor-pointer flex flex-col gap-3'>
          <li className='flex items-center gap-5'>
            <House className='stroke-current' /> <span>Home</span>
          </li>
          <li className='flex items-center gap-5'>
            <Music className='stroke-current' /> <span>Library</span>
          </li>
          <li className='flex items-center gap-5'>
            <User className='stroke-current' /> <span>Profile</span>
          </li>
          <li className='flex items-center gap-5'>
            <Bookmark className='stroke-current' /> <span>Saved</span>
          </li>
          <li className='flex items-center gap-5 justify-between'>
            <div className='flex items-center gap-5'>
              <Mail className='stroke-current' />
              <span>Messages</span>
            </div>
            <span className='bg-primary-500 text-white rounded-full px-1.5 py-1 text-sm font-medium'>
              25
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
