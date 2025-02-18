import chroma from 'chroma-js'

export const getNeutralColor = (color: string) => {
  const gray = '#808080'
  const neutral = chroma.mix(color, gray, 0.9, 'lab').hex()
  return neutral
}
