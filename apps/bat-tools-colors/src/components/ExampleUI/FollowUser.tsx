import { type Shades } from '../../types'
import { Button } from '../ui/Button/Button'
import { useState } from 'react'

export function User({ shades, secondaryShades }: { shades: Shades; secondaryShades?: Shades }) {
  const [isHovered, setIsHovered] = useState(false)
  const BACKGROUND_50 = secondaryShades ? secondaryShades[50] : shades[50]
  const TITLE_800 = secondaryShades ? secondaryShades[800] : shades[800]
  const BORDER_100 = secondaryShades ? secondaryShades[100] : shades[100]
  return (
    <div
      className='flex items-center justify-between px-4 py-2 rounded-md border-2'
      style={{
        backgroundColor: BACKGROUND_50,
        borderColor: BORDER_100
      }}>
      <div className='flex items-center gap-2'>
        <figure
          className='size-10 border-2 rounded-full cursor-pointer'
          style={{
            borderColor: shades[200]
          }}>
          <img
          src='#'
            /* src='https://avatar.iran.liara.run/username?username=Bat+Doe' */
            alt='Bat img'
          />
        </figure>
        <div className='flex flex-col'>
          <h3
            className='text-lg font-bold'
            style={{
              color: TITLE_800
            }}>
            Bat Doe
          </h3>
          <a
            href='#'
            className='text-sm hover:underline hover:underline-offset-2'
            style={{
              color: shades[600]
            }}>
            @BatDev64
          </a>
        </div>
      </div>

      <Button
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          backgroundColor: isHovered ? shades[700] : shades[500],
          color: 'white'
        }}>
        Follow
      </Button>
    </div>
  )
}
