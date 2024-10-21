import { expect, it, describe } from 'vitest'
import { isColorHex } from './isColorHex'

describe('isColorHex', () => {
  it('should return an error if the parameter is not a string', () => {
    const invalidInput = 4
    expect(() => isColorHex(invalidInput)).toThrowError('It is not a string')
  })

  it('should return false if is a invalid color', () => {
    const result = isColorHex('a')
    expect(result).toBeFalsy()
  })

  it('should return true if the color is valid', () => {
    expect(isColorHex('#000000')).toBeTruthy()
    expect(isColorHex('#000')).toBeTruthy()
  })

  it('should return true if the color is valid without hash', () => {
    expect(isColorHex('000000')).toBeTruthy()
    expect(isColorHex('000')).toBeTruthy()
  })

  it('should return false if the hex color length is less than 3 or greater than 6', () => {
    expect(isColorHex('#0000000')).toBeFalsy()
    expect(isColorHex('#00')).toBeFalsy()
    expect(isColorHex('#0')).toBeFalsy()

    expect(isColorHex('0000000')).toBeFalsy()
    expect(isColorHex('00')).toBeFalsy()
    expect(isColorHex('0')).toBeFalsy()
    expect(isColorHex('')).toBeFalsy()
  })
})
