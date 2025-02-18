import chroma from 'chroma-js'

export const checkContrast = (
  bg: string,
  lightText: string = '#fff',
  darkText: string = '#000'
) => {
  const c = chroma.contrast(lightText, bg)

  return c < 4.5 ? darkText : lightText
}
