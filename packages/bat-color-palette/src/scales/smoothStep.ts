/**
 * Smoothing function to distribute values across the scale.
 * Applies quadratic interpolation on low values to give more weight to light tones.
 *
 * Función de suavizado para distribuir los valores en la escala.
 * Aplica una interpolación cuadrática en los valores bajos para dar más peso a los tonos claros.
 *
 * @param {number} lum - Normalized value (0 to 1).
 *                   - Valor normalizado (0 a 1).
 ** @returns {number} Smoothed value.
                      Valor suavizado.
 */

export const smoothStep = (lum: number) => (lum < 0.5 ? 2 * lum * lum : lum)
