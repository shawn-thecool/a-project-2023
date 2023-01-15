import { useState } from "react";

export const useNav = () => {
  const [status, setStatus] = useState<string>("fold");

  const open = status !== "fold";
  const onOpen = () => setStatus("expanded");
  const onClose = () => setStatus("fold");

  return { status, open, onOpen, onClose };
};
