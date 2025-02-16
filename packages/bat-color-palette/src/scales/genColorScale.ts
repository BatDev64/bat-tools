import chroma from 'chroma-js'
import { getDarkLuminance } from './getDarkLuminance'
import { getLightLuminance } from './getLightLuminance'
import { getBaseLuminance } from './getBaseLuminance'
import { smoothStep } from './smoothStep'
import { adjustSaturation } from './adjustSaturation'

/**
 * Generates a color scale based on an input color.
 *
 * Genera una escala de colores basada en un color de entrada.
 *
 * @param {string} color - Base color in any valid format (hex, rgb, hsl, etc.).
 *                         Color base en cualquier formato válido (hex, rgb, hsl, etc.).
 *
 * @returns {chroma.Color[]} An array with 11 colors in `chroma.Color` format.
 *                           Un array con 11 colores en formato `chroma.Color`.
 *
 * The function creates a smooth transition from a lighter shade to the base color
 * and then to a darker shade, using LAB color space interpolation.
 *
 * La función crea una transición suave desde un tono claro hasta el color base,
 * y luego hacia un tono más oscuro, interpolando en el espacio de color LAB.
 */
export const genColorScale = (color: string) => {
  if (!chroma.valid(color)) return chroma.scale(['#000']).colors(11, null)

  const [hue, saturation, luminance] = chroma(color).hsl()

  // Gets a luminance based on the HUE value of the color
  // Obtiene una luminancia basada en el valor HUE del color
  const lightLuminance = getLightLuminance(hue)
  const darkLuminance = getDarkLuminance(hue)
  const baseLuminance = getBaseLuminance(hue)

  // Define the lightest and darkest colors, adjusting saturation.
  // Define el color más claro y más oscuro ajustando la saturación.
  const lightColor = chroma(color).set('hsl.l', lightLuminance).set('hsl.s', 1)

  const dark = chroma(color)
    .set('hsl.l', darkLuminance)
    .set('hsl.s', saturation * 0.5)

  const isGrayish = saturation <= 0.15
  const darkGray = chroma(color).set('hsl.l', 0.08)
  const darkColor = isGrayish ? darkGray : dark

  // Ensure the base color has the desired luminance.
  // Asegurar que el color base tenga la luminosidad deseada.
  const baseColor =
    luminance < baseLuminance || luminance > baseLuminance ?
      chroma(color).set('hsl.l', baseLuminance)
    : chroma(color)

  // Create the color scale interpolating in the LAB color space.
  // Crear la escala de colores interpolando en el espacio de color LAB.
  const colorScale = chroma
    .scale([lightColor, baseColor, darkColor])
    .mode('lab')

  // Generate 11 colors for the scale using the smoothStep function.
  // Generar los 11 colores de la escala aplicando la función de suavizado.
  return Array.from({ length: 11 }, (_, i) => {
    const lum = smoothStep(i / 10)
    const adjustedSaturation = adjustSaturation(lum, isGrayish, saturation)

    // Adjust saturation for lighter colors.
    // Ajusta la saturación para colores claros.
    if (i < 6) return colorScale(lum).set('hsl.s', adjustedSaturation)

    return colorScale(lum)
  })
}
