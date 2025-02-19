import { Alerts } from './Alerts'
import { Card } from './Card'
import { Feed } from './Feed'
import { InfoCards } from './InfoCards'
import { LoginForm } from './LoginForm'
import { Sidebar } from './Sidebar'
import { User } from './User'

export const ColorPreview = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-text-primary dark:text-text-primary-dark'>
        Examples
      </h2>
      <div className='flex flex-col gap-4 sm:flex-row '>
        <div className='flex flex-col gap-4 w-full sm:max-w-3xs'>
          <User />
          <Sidebar />
        </div>
        <Feed />
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Card />
        <LoginForm />
      </div>
      <InfoCards />
      <Alerts />
    </section>
  )
}
