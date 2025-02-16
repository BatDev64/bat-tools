/**
 * Obtains the base luminosity of color 500 according to the hue.
 * Obtiene la luminosidad base del color 500 según el matiz.
 *
 * @param {number} hue - Color hue in degrees (0-360).
 *                     - Matiz del color en grados (0-360).
 * @returns {number} Recommended luminosity for the base tone (500)
 *                   Luminosidad recomendada para el tono base (500).
 */
export const getBaseLuminance = (hue: number) => {
  if (hue < 20 || hue >= 345) return 0.57 // Rojo - red
  if (hue < 50) return 0.5 // Naranja - orange
  if (hue < 85) return 0.5 // Amarillo - yellow
  if (hue < 165) return 0.42 // Verde - green
  if (hue < 260) return 0.58 // Azul/Cian - blue
  return 0.57 // Púrpura/Magenta - purple
}
