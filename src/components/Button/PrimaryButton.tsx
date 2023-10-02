import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const PrimaryButton = ({
  buttonText,
  className,
  ...props
}: PrimaryButtonProps) => (
  <button className={`btn-primary ${className}`} {...props}>
    {buttonText}
  </button>
);

export default PrimaryButton;
