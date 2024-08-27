import { describe, it, expect } from 'vitest'
import { generateColorScale } from '../generateColorScale'
import chroma from 'chroma-js'

describe('generatePalette', () => {
  it('should return an error if the color is invalid', () => {
    const r = generateColorScale('#')

    expect(r).toMatchObject({
      '950': '#000000'
    })
  })
  it('the palette must contain the color original', () => {
    const color = '#84cc16'
    const palette = generateColorScale(color)

    expect(Object.values(palette)).toContain(color)
  })
  it('the palette must have 11 colors', () => {
    const color = '#84cc16'
    const palette = generateColorScale(color)

    expect(Object.keys(palette).length).toEqual(11)
  })
  it('should have the light color in shade 50', () => {
    const color = '#fff'
    const palette = generateColorScale(color)

    expect(palette).toMatchObject({
      50: '#ffffff'
    })
  })
  it('should have the dark color in shade 950', () => {
    const color = '#000'
    const palette = generateColorScale(color)

    expect(palette).toMatchObject({
      950: '#000000'
    })
  })
  it('generated colors must be valid strings in hex format', () => {
    const color = '#84cc16'
    const palette = generateColorScale(color)

    Object.values(palette).forEach((el) => {
      expect(chroma.valid(el)).toBe(true)
    })
  })
})
