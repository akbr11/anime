import { create } from "zustand";

const useInfoModal = create((set) => ({
  mal_id: undefined,
  isOpen: false,
  onOpen: (mal_id) => set({ isOpen: true, mal_id }),
  onClose: () => set({ isOpen: false, mal_id: undefined }),
}));

export default useInfoModal;
