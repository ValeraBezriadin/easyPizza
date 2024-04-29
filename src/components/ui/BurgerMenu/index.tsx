import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import css from "./style.module.css";
import { useBurgerMenuStore } from "@/store/burgerMenuStore";
import phoneImg from "@/static/icons/phone.svg";
import pinImg from "@/static/icons/pin.svg";
import facebookImg from "@/static/icons/facebooksvg.svg";
import instagramImg from "@/static/icons/instagram.svg";

const BurgerMenu: FC = () => {
  const { menuIsOpen } = useBurgerMenuStore();
  console.log(menuIsOpen);

  return (
    <>
      {menuIsOpen && (
        <div className={"container"}>
          <div className={css.nav__menu}>
            <ul className={css.nav__menu_list}>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Акции</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>О компании</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Пользовательское соглашение</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Условия гарантии</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Ресторан</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Контакты</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Поддержка</Link>
              </li>
              <li className={css.nav__menu_item}>
                <Link href={"#"}>Отследить заказ</Link>
              </li>
            </ul>
            <span className={css.nav__line_burger}>.</span>
            <div className={css.nav__social}>
              <div className={css.nav__social_item}>
                <Image alt="logo" src={phoneImg} width={24} height={24} />
                <span className={css.nav__social_text}>+7 (926) 223-10-11</span>
              </div>
              <div className={css.nav__social_item}>
                <Image alt="logo" src={pinImg} width={24} height={24} />
                <span className={css.nav__social_text}>
                  Москва, ул. Юных Ленинцев, д.99
                </span>
              </div>
              <div className={css.nav__social_item}>
                <div className={css.nav__social_wrraper}>
                  <Image alt="logo" src={facebookImg} width={24} height={24} />
                  <span className={css.nav__social_text}>Facebok</span>
                </div>
                <div className={css.nav__social_wrraper}>
                  <Image alt="logo" src={instagramImg} width={24} height={24} />
                  <span className={css.nav__social_text}>Instagram</span>
                </div>
              </div>
            </div>
            <span className={css.nav__line_burger}>.</span>
            <div className={css.nav__menu_time}>
              <span>Время работы: с 11:00 до 23:00</span>
            </div>
            <span className={css.nav__line_burger}>.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
