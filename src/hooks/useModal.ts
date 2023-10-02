import { useContext } from "react";

import { ModalContext } from "@context/ModalContext";

const useModal = () => {
  const isModalOpen = useContext(ModalContext);

  return { isModalOpen };
};

export default useModal;
