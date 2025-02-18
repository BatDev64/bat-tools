import { MessageCircleWarning } from '#components/ui/Icons'

export const Alerts = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex p-2 items-center bg-primary-50 dark:bg-primary-950 rounded-2xl gap-4 text-primary border border-primary-300 dark:border-primary-500'>
        <div className='size-12 text-primary-800 dark:text-primary-950 bg-primary-200 dark:bg-primary-300 flex items-center justify-center rounded-full grow-0 shrink-0'>
          <MessageCircleWarning />
        </div>
        <p className='text-sm font-medium text-pretty text-primary-800 dark:text-primary-200'>
          New content available: There are new posts in your feed.
        </p>
      </div>
      <div className='flex p-2 items-center bg-secondary-50 dark:bg-secondary-950 rounded-2xl gap-4 text-secondary border border-secondary-300 dark:border-secondary-500'>
        <div className='size-12 text-secondary-800 dark:text-secondary-950 bg-secondary-200 dark:bg-secondary-300 flex items-center justify-center rounded-full grow-0 shrink-0'>
          <MessageCircleWarning />
        </div>
        <p className='text-sm font-medium text-pretty text-secondary-800 dark:text-secondary-200'>
          Posting issue: Your tweet could not be sent.
        </p>
      </div>
      <div className='flex p-2 items-center bg-neutral-50 dark:bg-neutral-950 rounded-2xl gap-4 text-neutral border border-neutral-300 dark:border-neutral-500'>
        <div className='size-12 text-neutral-800 dark:text-neutral-950 bg-neutral-200 dark:bg-neutral-300 flex items-center justify-center rounded-full grow-0 shrink-0'>
          <MessageCircleWarning />
        </div>
        <p className='text-sm font-medium text-pretty text-neutral-800 dark:text-neutral-200'>
          No news: You are up to date.
        </p>
      </div>
    </div>
  )
}
