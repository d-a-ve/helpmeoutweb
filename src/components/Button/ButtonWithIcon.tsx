import React, { ReactNode } from "react";

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  iconUrl?: string;
  icon?: ReactNode;
  buttonTextClassName?: string;
}

const ButtonWithIcon = ({
  buttonText,
  className,
  iconUrl,
  icon,
  buttonTextClassName,
  ...props
}: ButtonWithIconProps) => (
  <button
    className={`flex items-center justify-center ${className}`}
    {...props}
  >
    {iconUrl ? (
      <img
        className="w-5 h-5 mr-2"
        src={iconUrl}
        alt={`${buttonText.toLowerCase()} icon`}
      />
    ) : (
      <span className="w-5 h-5">{icon}</span>
    )}
    <span className={buttonTextClassName}>{buttonText}</span>
  </button>
);

export default ButtonWithIcon;
