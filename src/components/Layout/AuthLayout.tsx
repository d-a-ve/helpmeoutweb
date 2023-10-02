import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="w-full px-page-layout flex justify-center">{children}</div>
  );
};

export default AuthLayout;
