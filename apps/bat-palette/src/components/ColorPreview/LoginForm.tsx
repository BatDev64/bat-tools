import { Button, Input } from '#components/ui'

export const LoginForm: React.FC = () => {
  return (
    <div className='min-w-72 p-6 bg-surface dark:bg-surface-dark rounded-2xl shadow flex flex-col gap-8 border border-border dark:border-border-dark'>
      <h2 className='text-xl font-bold text-text-primary dark:text-text-primary-dark'>
        Login
      </h2>
      <form className='flex flex-col gap-6'>
        <div className='flex flex-col gap-5'>
          <label className='flex flex-col gap-2'>
            <span className='text-text-primary dark:text-text-primary-dark text-base font-medium'>
              Email
            </span>
            <Input
              type='email'
              variant='muted'
            />
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-text-primary dark:text-text-primary-dark text-base font-medium'>
              Password
            </span>
            <Input
              type='password'
              variant='muted'
            />
          </label>
        </div>
        <Button
          variant='primary'
          type='button'>
          Login
        </Button>
      </form>

      <a
        href='#'
        className='text-sm text-text-body dark:text-text-body-dark hover:underline'>
        don't have an account? <b>Sing up for free</b>
      </a>
    </div>
  )
}
