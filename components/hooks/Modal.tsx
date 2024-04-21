import { create } from "zustand";

interface ModalProps {
  modal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Modal = create<ModalProps>((set) => ({
  modal: false,
  onOpen: () => set({ modal: true }),
  onClose: () => set({ modal: false }),
}));
