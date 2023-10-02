import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const ModalContext = createContext({} as boolean);
export const ModalSetterContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(undefined as unknown as Dispatch<SetStateAction<boolean>>);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={isModalOpen}>
      <ModalSetterContext.Provider value={setIsModalOpen}>
        {children}
      </ModalSetterContext.Provider>
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
