import { useState } from "react";

export interface IUseNavReq {}
export interface IUseNavRes {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNav = ({}: IUseNavReq = {}): IUseNavRes => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return { open, onOpen, onClose };
};
