import { useCallback, useEffect } from 'react'
import { type PaletteSteps } from '#/models/palette.types'

/**
 * Hook that applies a list of colors as custom CSS variables to `:root`.
 * Hook que aplica una lista de colores como variables CSS personalizadas en `:root`.
 *
 * @param {PaletteSteps[]} colors - List of colors organized in scale steps.
 *                                - Lista de colores organizada en pasos de escala.
 * @param {string[]} [names=['primary', 'secondary', 'tertiary']] - Base names for CSS variables.
 *                                                                - Nombres base para las variables CSS.
 */

export function useCustomProperties(
  colors: PaletteSteps[],
  names: string[] = ['primary', 'secondary', 'tertiary']
) {
  const applyColorsToCSS = useCallback(
    (colors: PaletteSteps[]) => {
      if (!Array.isArray(colors) || colors.length === 0) return

      const root = document.documentElement

      colors.forEach((el, i) => {
        const name = names[i]

        Object.entries(el).forEach(([key, value]) => {
          root.style.setProperty(`--color-${name}-${key}`, value)
        })
      })
    },
    [names]
  )

  useEffect(() => {
    applyColorsToCSS(colors)
  }, [colors, names, applyColorsToCSS])
}
