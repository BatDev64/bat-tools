import chroma from 'chroma-js'

export const createColorVariants = (color: string) => {
  const complementary = chroma(color).set('hsl.h', '+180').hex()
  const gray = chroma(color).desaturate(3).hex()

  return [color, complementary, gray]
}
