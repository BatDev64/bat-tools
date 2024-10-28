import chroma from 'chroma-js'

export const sortByLuminance = (colors: string[]) => {
  return colors.sort((a, b) => {
    const l1 = Math.round(chroma(a).get('hsl.l') * 100)
    const l2 = Math.round(chroma(b).get('hsl.l') * 100)

    return l2 - l1
  })
}
