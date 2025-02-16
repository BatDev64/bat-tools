/**
 * Gets the minimum brightness for dark colors based on hue.
 * Obtiene la luminosidad mínima para los colores oscuros según el matiz (hue).
 * @param {number} hue - Color hue in degrees (0-360).
 *                     - Matiz del color en grados (0-360).
 * @returns {number} Recommended minimum brightness for dark tones.
 *                   Luminosidad mínima recomendada para tonos oscuros.
 */
export const getDarkLuminance = (hue: number) => {
  if (hue < 50) return 0.15 // Rojos y naranjas
  if (hue < 90) return 0.14 // Amarillos y verdes claros
  if (hue < 180) return 0.1 // Verdes oscuros
  if (hue < 270) return 0.2 // Azules y morados oscuros
  if (hue < 330) return 0.15 // Púrpuras y rosas
  return 0.15 // Rojos más oscuros y tonos finales
}
