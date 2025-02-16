/**
 * Gets the maximum luminosity for light colors based on hue.
 * Obtiene la luminosidad máxima para los colores claros según el matiz (hue).
 * @param {number} hue - Hue of the color in degrees (0-360).
 *                     - Matiz del color en grados (0-360).
 * @returns {number} Recommended maximum luminosity for light colors.
 *                   Luminosidad máxima recomendada para tonos claros.
 */
export const getLightLuminance = (hue: number) => {
  if (hue < 50) return 0.97 // Rojos y naranjas
  if (hue < 90) return 0.96 // Amarillos y verdes claros
  if (hue < 180) return 0.97 // Verdes oscuros
  if (hue < 270) return 0.97 // Azules y morados oscuros
  if (hue < 330) return 0.98 // Púrpuras y rosas
  return 0.97 // Rojos más oscuros y tonos finales
}
