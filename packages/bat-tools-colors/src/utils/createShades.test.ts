import { describe, expect, expectTypeOf, it } from 'vitest'
import { createShades } from './createShades'
import { Shades } from '../models/colorSacle.types'

const colors = ['#fff', '#ccc', '#aaa', '#000']

describe('createShades', () => {
  const result = createShades(colors)

  it('', () => {
    expectTypeOf(result).toMatchTypeOf<Shades>()
  })

  it('should return an object with proper shade keys', () => {
    expect(result).toEqual({
      50: '#fff',
      100: '#ccc',
      200: '#aaa',
      950: '#000'
    })
  })

  it('should assing the firts color to shade 50 and the last to 950', () => {
    expect(colors[0]).toEqual(result[50])
    expect(colors[3]).toEqual(result[950])
  })

  it('should assing only shade 50 when array has one color', () => {
    const color = colors[0]
    const result = createShades([color])

    expect(result).toEqual({
      50: color
    })
  })

  it('should assing two colors to shades 50 and 950 respectively', () => {
    const color_one = colors[0]
    const color_two = colors[1]

    const result = createShades([color_one, color_two])

    expect(result).toEqual({
      50: color_one,
      950: color_two
    })
  })

  it('should return an empty object if input is empty', () => {
    const result = createShades([])
    expect(result).toEqual({})
  })
})
