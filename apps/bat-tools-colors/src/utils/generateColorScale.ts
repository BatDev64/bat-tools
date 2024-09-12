import chroma from 'chroma-js'
import { Shades } from '../types'

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
      : ((index * 100) as 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950)
    acc[shade] = el
    return acc
  }, {} as Shades)
}

export function generateColorScale(color: string) {
  const isValidColor = chroma.valid(color)
  const DEFAULT_COLOR = '#2e2e2e'
  const currentColor = isValidColor ? color : DEFAULT_COLOR

  const luminance = chroma(currentColor).get('hsl.l') * 100
  const isLightColor = luminance > 80 && luminance <= 99
  const isDarkColor = luminance >= 0 && luminance <= 35

  let lightColor = chroma(currentColor).set('hsl.l', 0.98).hex()
  let darkColor = chroma(currentColor).set('hsl.l', 0.18).hex()
  let middleColor = chroma(currentColor).set('hsl.l', 0.5).hex()

  const isMoreLight = chroma(lightColor).get('hsl.l') <= luminance
  /* const isMoreDark = chroma(darkColor).get('hsl.l') >= luminance */

  if (isLightColor && isMoreLight) {
    lightColor = currentColor
  } else if (isDarkColor) {
    darkColor = currentColor
  } else {
    middleColor = currentColor
  }

  const colorScale = chroma.scale([lightColor, middleColor, darkColor]).mode('hsl').colors(11)

  const sortedColors = sortByLuminance(colorScale)
  const shades = createShades(sortedColors)

  return shades
}
