import React, { FC } from "react";
import { useBurgerMenuStore } from "@/store/burgerMenuStore";
import css from "./style.module.css";
import cn from "classnames";
const BurgerButton: FC = () => {
  const { burgerMenuIsOpen, burgerMenuToggle } = useBurgerMenuStore();

  return (
    <div
      className={cn(css.nav__burger, {
        [css.nav__burger_active]: burgerMenuIsOpen,
      })}
      onClick={burgerMenuToggle}
    >
      <div className={css.nav__burger_line}></div>
      <div className={css.nav__burger_line}></div>
      <div className={css.nav__burger_line}></div>
    </div>
  );
};

export default BurgerButton;
