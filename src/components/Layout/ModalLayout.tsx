import { ReactNode } from "react";

interface ModalLayoutProps {
  children: ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProps) => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black/50 px-page-layout z-10 flex items-center justify-center">
      {children}
    </div>
  );
};

export default ModalLayout;
