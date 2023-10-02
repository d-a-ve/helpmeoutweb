import React from "react";
import { Link } from "react-router-dom";

interface LinkPrimaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonText: string;
  to: string;
}

const LinkPrimaryButton = ({
  buttonText,
  className,
  to,
  ...props
}: LinkPrimaryButtonProps) => (
  <Link to={to} className={`btn-primary ${className}`} {...props}>
    {buttonText}
  </Link>
);

export default LinkPrimaryButton;
