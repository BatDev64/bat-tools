import { Activity, ChartColumn } from '#components/ui/Icons'

// Formulario de Login

export const InfoCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* Card de Usuarios Activos */}
      <div className='p-4 rounded-2xl shadow bg-primary-500 text-text-white dark:text-text-black dark:bg-primary-400'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-lg font-semibold'>Active Users</h3>
            <p className='text-3xl font-bold'>12,543</p>
            <p className='text-sm text-text-white-muted dark:text-text-black-muted mt-2'>
              +8.2% this month
            </p>
          </div>
          <div className='w-12 h-12 bg-white/20 dark:bg-white/30 flex items-center justify-center rounded-full'>
            <Activity />
          </div>
        </div>
      </div>

      {/* Card de Engagement General */}
      <div className='p-4 rounded-2xl shadow bg-surface dark:bg-surface-dark text-neutral-950 dark:text-neutral-50'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-lg font-semibold'>General Engagement</h3>
            <p className='text-3xl font-bold'>76%</p>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2'>
              Based on weekly interactions
            </p>
          </div>
          <div className='w-12 h-12 bg-secondary-600 text-white dark:bg-secondary-400 flex items-center justify-center rounded-full'>
            <ChartColumn className='dark:stroke-neutral-900' />
          </div>
        </div>
      </div>
    </div>
  )
}
