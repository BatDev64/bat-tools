import { useCallback, useState } from 'react'
import copy from 'copy-to-clipboard'

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToboard = useCallback((text: string) => {
    const result = copy(text)

    if (result) {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }, [])

  return { copyToboard, isCopied }
}
