import React, { FC } from "react";
import css from "./style.module.css";
import cn from "classnames";
import { userdropdownMenu } from "@/store/dropdownMenuStore";
interface Iprops {
  children: React.ReactNode;
}
const DropdownContent: FC<Iprops> = ({ children }) => {
  const { dropdownMenuIsOpen } = userdropdownMenu();
  return (
    <div
      className={cn(css.dropdown__content, {
        [css.dropdown__content_active]: dropdownMenuIsOpen,
      })}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
