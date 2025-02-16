import namer from 'color-namer'
import chroma from 'chroma-js'
/**
 * Gets a representative name for a given color.
 * Obtiene un nombre representativo para un color dado.
 *
 * @param {string} color - Base color.
 *                         Color base.
 * @returns {string} The normalized color name.
 *                   El nombre del color normalizado.
 */

export const getNameColor = (color: string) => {
  if (!chroma.valid(color)) return 'no-name'

  const result = namer(color, { pick: ['basic', 'ntc'] })

  const name = result.ntc?.[0]?.name
  if (!name) return 'no-name'

  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
}
