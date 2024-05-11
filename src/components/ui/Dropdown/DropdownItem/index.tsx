import React, { FC } from "react";
import css from "./style.module.css";
import { userdropdownMenu } from "@/store/dropdownMenuStore";

interface DropdownItemProps {
  children: string;
}

const DropdownItem: FC<DropdownItemProps> = ({ children }) => {
  const {
    dropdownMenuButtonSetText,
    dropdownMenuButtonText,
    dropdownMenuToggle,
  } = userdropdownMenu();
  const handler = (text: string) => {
    if (text != dropdownMenuButtonText) {
      dropdownMenuButtonSetText(text);
      dropdownMenuToggle();
    } else {
      console.log("u already pick this city");
    }
  };
  return (
    <div className={css.dropdown__item} onClick={() => handler(children)}>
      {children}
    </div>
  );
};

export default DropdownItem;
