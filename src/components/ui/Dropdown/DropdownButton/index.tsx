import React, { FC } from "react";
import css from "./style.module.css";
import Image from "next/image";
import downArrow from "@/static/icons/downArrow.svg";
import cn from "classnames";
import { userdropdownMenu } from "@/store/dropdownMenuStore";

const DropdownButton: FC = () => {
  const { dropdownMenuIsOpen, dropdownMenuToggle, dropdownMenuButtonText } =
    userdropdownMenu();
  const trimToThirteen = (item: string) => {
    if (item.length > 13) {
      return item.substring(0, 13) + "...";
    }
    return item;
  };
  return (
    <div
      className={cn(css.dropdown__btn, {
        [css.dropdown__btn_active]: dropdownMenuIsOpen,
      })}
      onClick={dropdownMenuToggle}
    >
      {trimToThirteen(dropdownMenuButtonText)}
      <Image
        className={cn(css.toggle__icon, {
          [css.toggle__icon_active]: dropdownMenuIsOpen,
        })}
        src={downArrow}
        alt={" arrow for drop down menu "}
        width={6.75}
        height={12}
      />
    </div>
  );
};

export default DropdownButton;
