import { describe, it, expect, expectTypeOf } from 'vitest'
import chroma from 'chroma-js'
import { genColorScale } from './genColorScale'

describe('genColors.test', () => {
  it('should return 11 colors', () => {
    const mock = '#6ed600'
    const result = genColorScale(mock)

    expect(result).toHaveLength(11)
  })
  it('it should return 11 dark colors if the color is invalid', () => {
    const mock = 'invalid'
    const mockResult = Array(11).fill('#000000')

    const result = genColorScale(mock)

    expect(result).toHaveLength(11)
    expect(result.every((color) => chroma.valid(color.hex()))).toBe(true)
    expectTypeOf(result).toEqualTypeOf<chroma.Color[]>()
    expect(result.every((color, i) => color.hex() === mockResult[i])).toBe(true)
  })

  it('should adjust the saturation when the color is gray', () => {
    const mockColorGray = '#4a5565'
    const mockColorSatured = '#ff246b'

    const grayScaleResult = genColorScale(mockColorGray)
    const saturedScaleResult = genColorScale(mockColorSatured)

    const firstColorGray = grayScaleResult[0]?.hsl()[1]
    const firstColorSatured = saturedScaleResult[0]?.hsl()[1]

    expect(firstColorGray).toBeLessThan(1)
    expect(firstColorSatured).toBe(1)
  })
})
