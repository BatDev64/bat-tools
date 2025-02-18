export const Header = () => {
  return (
    <header className='w-full text-balance '>
      <h1 className='text-3xl sm:text-4xl md:text-5xl  font-black text-text-primary dark:text-text-primary-dark mb-4'>
        Perfect Color Generator for Tailwind CSS.
      </h1>
      <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-text-secondary dark:text-text-secondary-dark'>
        Generate Custom Palettes in Hex, RGB, HSL and CSS Variables, with
        support for Tailwind CSS 4, including OKLCH format.
      </h2>
    </header>
  )
}
