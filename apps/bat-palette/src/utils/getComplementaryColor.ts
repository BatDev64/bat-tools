import chroma from 'chroma-js'

export const getComplementary = (color: string) => {
  const [L, C, H] = chroma(color).lch()

  const complementH = (H + 180) % 360

  const complementary = chroma.lch(L, C, complementH).hex()

  return complementary
}
