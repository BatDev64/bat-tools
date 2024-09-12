import { useColorPaletteStore } from '../../store/useColorPalette'

export function useModalIsOpen() {
  const toggleModal = useColorPaletteStore((state) => state.toggleModal)
  const modalIsOpen = useColorPaletteStore((state) => state.modalIsOpen)

  return { toggleModal, modalIsOpen }
}
