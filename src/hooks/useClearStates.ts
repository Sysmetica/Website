import { csModal, menuState } from "@/state";
import { useSetAtom } from "jotai";
import { useCallback } from "react";

export const useClearStates = () => {
  const setMenuState = useSetAtom(menuState);
  const setModal = useSetAtom(csModal);

  return useCallback(() => {
    setMenuState(false);
    setModal(false);
    document.body.style.overflow = '';

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
