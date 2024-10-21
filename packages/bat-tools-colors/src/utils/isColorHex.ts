export const isColorHex = (color: string) => {
  if (typeof color !== 'string') {
    throw new Error('It is not a string')
  }

  const colorWithoutHash = color.startsWith('#') ? color.substring(1) : color

  if (colorWithoutHash.length > 6) return false

  const regex = /([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/

  return regex.test(colorWithoutHash)
}
