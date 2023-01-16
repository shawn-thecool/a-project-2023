import { useState } from "react";

export const useNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMove, setIsMove] = useState<boolean>(false);

  const onOpenNav = () => setIsOpen(true);
  const onCloseNav = () => setIsOpen(false);
  const onCloseNavDelay = () => {
    setIsOpen(false);
    setIsMove(true);
    const delay = setTimeout(() => {
      setIsMove(false);
      clearTimeout(delay);
    }, 200);
  };

  return {
    isOpen,
    isMove,
    onOpenNav,
    onCloseNav,
    onCloseNavDelay,
  };
};


