import { useCallback, useEffect, useState } from 'react'

export function useCopyToBoard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToBoard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        /* setTimeout(() => setIsCopied(false), 2000) */
        console.log('Text copied to clipboard')
      })
      .catch((err) => {
        setIsCopied(false)
        console.error('Error copying text to clipboard:', err)
      })
  }, [])

  useEffect(() => {
    if (isCopied) {
      const resetCopied = () => setIsCopied(false)
      const id = window.setTimeout(resetCopied, 2000)
      return () => window.clearTimeout(id)
    }
  }, [isCopied])

  return { isCopied, copyToBoard }
}
