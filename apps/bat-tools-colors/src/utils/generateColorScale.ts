import chroma from 'chroma-js'
import { type Shades } from '../types'

const sortByLuminance = (colors: Array<string>) => {
  return colors.sort((a, b) => {
    const l1 = Math.floor(chroma(a).luminance() * 100)
    const l2 = Math.floor(chroma(b).luminance() * 100)

    return l2 - l1
  })
}
const createShades = (colors: Array<string>) => {
  return colors.reduce((acc, el, index, arr) => {
    const shade =
      index == 0 ? 50
      : index === arr.length - 1 ? 950
      : index * 100
    acc[shade] = el
    return acc
  }, {} as Shades)
}
export const generateColorScale = (color: string) => {
  const isValidColor = chroma.valid(color)
  const currentColor = !isValidColor ? '000' : color

  const luminance = Math.round(chroma(currentColor).get('hsl.l') * 100)

  const isDarkColor = luminance >= 0 && luminance < 30
  const isLightColor = luminance >= 90 && luminance <= 100

  const lightColor = chroma(currentColor).set('hsl.l', 0.95).saturate(0.6).hex()
  const darkColor = chroma(currentColor).set('hsl.l', 0.1).hex()
  const color_500 = chroma(currentColor).set('hsl.l', 0.5).hex()

  const leftColor = isLightColor ? currentColor : lightColor
  const rightColor = isDarkColor ? currentColor : darkColor
  const middleColor = !(isLightColor || isDarkColor) ? currentColor : color_500

  const H = chroma(currentColor).get('hsl.h')
  const colorScale = chroma
    .scale([leftColor, middleColor, rightColor])
    .mode('lab')
    .colors(11)
    .map((el, i) => {
      if (el === currentColor) return el
      const h = luminance > Math.round(chroma(el).get('hsl.l') * 100) ? H - i : H + i
      return chroma(el).set('hsl.h', h).hex()
    })
  const sortedColors = sortByLuminance(colorScale)
  const shades = createShades(sortedColors)

  return shades
}
