/**
 * Adjusts the saturation of a gray color based on its relative luminosity.
 *
 * Ajusta la saturación de un color gris según su luminosidad relativa.
 *
 * @param {number} lum - Relative luminosity (0 for light, 1 for dark).
 *                     Luminosidad relativa (0: claro, 1: oscuro).
 *
 * @param {boolean} isGray - Indicates if the color is gray.
 *                           Indica si el color es gris.
 *
 * @param {number} baseSaturation - The base saturation value of the color.
 *                                  La saturación base del color.
 *
 * @returns {number} The adjusted saturation for the gray color.
 *                   La saturación ajustada para el color gris.
 *
 * If the color is not gray, the function returns the base saturation.
 * Si el color no es gris, la función retorna la saturación base.
 *
 * For gray colors, it reduces the saturation for darker tones by applying a linear adjustment.
 * Para colores grises, reduce la saturación en tonos oscuros aplicando un ajuste lineal.
 */

export const adjustSaturation = (
  lum: number,
  isGray: boolean,
  baseSaturation: number
) => {
  if (!isGray) return baseSaturation

  // For gray colors, adjust saturation based on luminosity.
  // Para colores grises, ajusta la saturación según la luminosidad.

  return baseSaturation * (1 - 0.6 * lum)
}
