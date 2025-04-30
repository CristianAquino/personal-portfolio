import { useState } from "react";

export function useModal() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return { isOpen, openModal, closeModal };
}
