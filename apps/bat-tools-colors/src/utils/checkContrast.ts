import chroma from 'chroma-js'
export const checkContrast = (colorA: string, colorB: string) => {
  const contrast = chroma.contrast(colorA, colorB)
  const roundedContrast = Math.floor(contrast)
  const minContrast = 4
  const isContrast = roundedContrast > minContrast

  return isContrast
}
