import { useEffect, useRef, useState } from "react";

import CheckIcon from "@components/Icons/CheckIcon";
import EditIcon from "@components/Icons/EditIcon";

const TransparentInput = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("EXTXTXTXTXTX");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isDisabled) {
      inputRef.current?.focus();
    }
  }, [isDisabled]);

  return (
    <div className="flex flex-col">
      <label htmlFor="video-name" className="text-slate-600 font-semibold">
        Name
      </label>
      <div className="flex gap-4 items-center xs:gap-2">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          name="video-name"
          className={`text-primary text-sub-h1 caret-primary border border-transparent outline-none bg-transparent px-6 py-3 sm:w-4/5 sm:px-4 focus:border-b-primary`}
          type="text"
          id="video-name"
          value={inputValue}
          disabled={isDisabled}
          ref={inputRef}
          tabIndex={isDisabled ? -1 : undefined} // Add this line
        />
        <span
          className="text-primary cursor-pointer transition duration-200 hover:scale-110 w-6 h-6"
          onClick={() => {
            setIsDisabled((prev) => !prev);
          }}
        >
          {isDisabled ? <EditIcon /> : <CheckIcon />}
        </span>
      </div>
    </div>
  );
};

export default TransparentInput;
