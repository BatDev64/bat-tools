import { Palette } from '../../types'
import { User } from './FollowUser'

export function ExampleUI({ palettes }: { palettes: Array<Palette> }) {
  const firstElement = palettes[0].shades
  const secondaryElement = palettes.length - 1 > 0 ? palettes[1].shades : undefined
  return (
    <section>
      <User
        shades={firstElement}
        secondaryShades={secondaryElement}
      />
    </section>
  )
}
