import React, { ReactNode } from "react";

interface CenterSectionProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const CenterSection = ({
  children,
  className,
  ...props
}: CenterSectionProps) => {
  return (
    <div
      className={`px-page-layout flex flex-col item-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CenterSection;
