"use client";
import React, { FC } from "react";
import css from "./style.module.css";
import BurgerButton from "../BurgerButton";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/static/icons/logoMain.svg";
import cartImg from "@/static/icons/cart.svg";
import { userCartMenu } from "@/store/cartMenu";
import { useBurgerMenuStore } from "@/store/burgerMenuStore";

const DownNavigation: FC = () => {
  const { burgerMenuIsOpen, burgerMenuToggle } = useBurgerMenuStore();
  const { cartMenuToggle } = userCartMenu();
  const cartHanddler = () => {
    if (burgerMenuIsOpen) {
      burgerMenuToggle();
    }
    cartMenuToggle();
  };

  return (
    <>
      <div className={css.nav__down}>
        <div className={css.nav__down_left}>
          <Link href={"/"} className={css.nav__logo}>
            <Image alt="logo" src={logoImg} width={24} height={24} />
            <span className={css.nav__text_bold + " " + css.nav__text_logo}>
              Швидко Піца
            </span>
          </Link>
        </div>
        <BurgerButton />
        <button className={css.nav__cart} onClick={() => cartHanddler()}>
          <span className={css.nav__cart_count}>59</span>
          <Image alt="cart" src={cartImg} width={24} height={24} />
          <span className={css.nav__pirce}>99999₴</span>
        </button>
      </div>
    </>
  );
};

export default DownNavigation;
