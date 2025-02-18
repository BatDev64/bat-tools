import { EllipsisVertical } from '#/components/ui/Icons'

export const User = () => {
  return (
    <div className='w-full flex items-center gap-4 bg-surface dark:bg-surface-dark rounded-2xl px-4 py-2 border border-border dark:border-border-dark shadow'>
      <span className='rounded-full size-10 text-center flex flex-col justify-center bg-primary-500 text-white dark:text-black dark:bg-primary-400 font-medium'>
        BD
      </span>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-semibold text-text-primary dark:text-text-primary-dark '>
              Bat Doe
            </p>
            <p className='text-sm text-text-secondary dark:text-text-secondary-dark'>
              @batDoe
            </p>
          </div>
        </div>
      </div>
      <EllipsisVertical className='stroke-neutral-500 dark:stroke-neutral-700' />
    </div>
  )
}
