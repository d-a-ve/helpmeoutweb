import { InputHTMLAttributes, ReactNode, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: ReactNode;
  inputType: string;
  name: string;
  labelClassName?: string;
}

const Input = ({
  label,
  inputType,
  className,
  children,
  name,
  labelClassName,
  value,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={`${label.toLowerCase()}-input`}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <div className="flex gap-4 items-center relative">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          name={label || name}
          className={`input ${className}`}
          type={inputType}
          id={`${(label || name).toLowerCase()}-input`}
          value={inputValue}
          {...props}
        />
        {children && (
          <span className="absolute top-1/2 right-2 -translate-y-1/2">
            {children}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
