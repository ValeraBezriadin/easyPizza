import React, { FC, useEffect, useRef } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import css from "./style.module.css";
import { userdropdownMenu } from "@/store/dropdownMenuStore";

interface IProps {
  content: React.ReactNode;
}

const Dropdown: FC<IProps> = ({ content }) => {
  const { dropdownMenuIsOpen, dropdownMenuToggle } = userdropdownMenu();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownMenuIsOpen &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownMenuToggle();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropdownMenuIsOpen]);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <DropdownButton />
      <DropdownContent>{content}</DropdownContent>
    </div>
  );
};

export default Dropdown;
