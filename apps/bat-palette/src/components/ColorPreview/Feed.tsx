import clsx from 'clsx'
import { Button } from '#components/ui'

const users = [
  { id: 1, name: 'Jane Doe', username: '@janedoe', initials: 'JD' },
  { id: 2, name: 'John Smith', username: '@johnsmith', initials: 'JS' },
  { id: 3, name: 'Alice Brown', username: '@aliceb', initials: 'AB' }
]

export const Feed = () => {
  return (
    <div className='flex flex-col gap-4 w-full '>
      {/* Post */}
      <div className='bg-surface dark:bg-surface-dark p-4 rounded-2xl shadow border border-border dark:border-border-dark flex-1'>
        <div className='flex items-start gap-3'>
          <span className='rounded-full size-10 text-center flex flex-col justify-center bg-primary-500 text-white dark:text-black dark:bg-primary-400 font-medium'>
            BD
          </span>
          <div className='flex-1'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='font-semibold text-text-primary dark:text-text-primary-dark'>
                  Bat Doe
                </p>
                <p className='text-sm text-text-secondary dark:text-text-secondary-dark'>
                  @batDoe
                </p>
              </div>
            </div>
            <p className='mt-2 text-text-body dark:text-text-body-dark text-pretty'>
              Exploring new UI ideas with TailwindCSS and React. 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Users */}
      <div className='bg-surface dark:bg-surface-dark p-4 rounded-2xl shadow border border-border dark:border-border-dark w-full'>
        <h3 className='text-text-primary dark:text-text-primary-dark font-semibold mb-3'>
          Who to follow
        </h3>
        <div className='space-y-3'>
          {users.map((user, i) => {
            return (
              <div
                key={user.id}
                className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span
                    className={clsx(
                      i !== 1 ?
                        'bg-primary-300 dark:bg-primary-400'
                      : 'bg-secondary-300 dark:bg-secondary-400',
                      'rounded-full size-10 text-center flex flex-col justify-center'
                    )}>
                    {user.initials}
                  </span>
                  <div>
                    <p className='text-text-primary dark:text-text-primary-dark font-medium'>
                      {user.name}
                    </p>
                    <p className='text-sm text-text-secondary dark:text-text-secondary-dark'>
                      {user.username}
                    </p>
                  </div>
                </div>
                <Button variant='outline'>Follow</Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
