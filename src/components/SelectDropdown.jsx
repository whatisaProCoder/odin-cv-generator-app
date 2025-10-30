import { useState } from "react";
import dropdownarrow from "../assets/icons/drop-down-arrow.svg";

function SelectDropdown({ className, selected, children }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className={className + " " + "relative select-none"}>
      <div
        className={
          "transition-colors bg-[#1E1E1E] hover:bg-[#282828] border border-[#282828] rounded-sm py-0.5 flex flex-row items-center" +
          "relative"
        }
        onClick={handleClick}
      >
        <div className="flex-1 flex items-center">{selected}</div>
        <img
          src={dropdownarrow}
          className="w-5 mr-1 transition-all"
          style={{ transform: open ? "rotate(180deg)" : "" }}
        ></img>
      </div>
      {open && (
        <div
          className="absolute mt-1 w-full bg-[#1e1e1e] border border-[#282828] rounded-sm p-1 flex flex-col gap-1 z-10 drop-shadow-xl"
          onClick={handleClick}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default SelectDropdown;
