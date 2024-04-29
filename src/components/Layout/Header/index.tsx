"use client";
import { FC } from "react";
import css from "./style.module.css";
import Image from "next/image";
import logoImg from "@/static/icons/logoMain.svg";
import Link from "next/link";
import cartImg from "@/static/icons/cart.svg";
import BurgerButton from "@/components/ui/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu";

const Header: FC = () => {
  return (
    <>
      <nav className={css.nav}>
        <span className={css.nav__line}>.</span>
        <div className={"container"}>
          <div className={css.nav__top}>
            <span className={css.nav__time}>
              Середній час доставки*:{" "}
              <b className={css.nav__text_bold}>99:99:99</b>
            </span>
            <div className={css.nav__top_right}>
              <span className={css.nav__time_open}>
                Ми працюємо: с 11:00 до 23:00
              </span>
              <button className={css.nav__sign}>Войти в аккаунт</button>
            </div>
          </div>
        </div>
        <span className={css.nav__line}>.</span>
        <div className={"container"}>
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
            <button className={css.nav__cart}>
              <span className={css.nav__cart_count}>59</span>
              <Image alt="cart" src={cartImg} width={24} height={24} />
              <span className={css.nav__pirce}>99999₴</span>
            </button>
          </div>
        </div>
        <span className={css.nav__line}>.</span>
        <BurgerMenu />
      </nav>
    </>
  );
};

export default Header;
