import { Button } from '#components/ui'

export const Card = () => {
  return (
    <aside className='p-6 rounded-2xl shadow border border-border dark:border-border-dark bg-surface dark:bg-surface-dark max-w-lg text-center flex flex-col gap-6 sm:justify-between'>
      <div>
        {/* Título con una jerarquía correcta */}
        <h3 className='text-xl font-semibold text-balance text-text-primary dark:text-text-primary-dark'>
          Turn your inspiration into perfect colors 🎨
        </h3>

        {/* Descripción optimizada sin repetir keywords */}
        <p className='mt-2 text-text-body dark:text-text-body-dark text-balance'>
          Explore and customize color palettes for interfaces, branding, and
          digital design. Save, export, and share unique combinations with a
          single click.
        </p>
      </div>
      {/* Beneficios sin sobrecargar con keywords */}
      <article className='text-sm text-left space-y-2'>
        <h4 className='font-bold text-balance text-text-primary dark:text-text-primary-dark'>
          🚀 Highlighted Features
        </h4>
        <ul className='text-text-body dark:text-text-body-dark text-pretty'>
          <li>🎨 Advanced shade customization.</li>
          <li>
            📂Export in <strong>CSS, HEX, RGB, HSL and OKLCH</strong>.
          </li>
          <li>
            🌗 Compatible with <strong>light and dark mode</strong>.
          </li>
        </ul>
      </article>

      {/* Botones con acción clara */}
      <div className='flex flex-col gap-2'>
        <Button variant='primary'>Generate Palette</Button>
        <Button variant='outline'>Explore combinations</Button>
      </div>
    </aside>
  )
}
