import { useState } from "react";

export interface IUseAsideReq {}
export interface IUseAsideRes {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAside = ({}: IUseAsideReq = {}): IUseAsideRes => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return { open, onOpen, onClose };
};
