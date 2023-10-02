import { useContext } from "react";

import { ModalSetterContext } from "@context/ModalContext";

const useModalSetter = () => {
  const setIsModalOpen = useContext(ModalSetterContext);

  return { setIsModalOpen };
};

export default useModalSetter;
