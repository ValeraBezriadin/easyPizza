import Link from "next/link";
import React, { FC } from "react";
import css from "./style.module.css";
import { useBurgerMenuStore } from "@/store/burgerMenuStore";
import Contacts from "../Contacts";

const BurgerMenu: FC = () => {
  const { burgerMenuIsOpen } = useBurgerMenuStore();

  return (
    <>
      {burgerMenuIsOpen && (
        <div className={css.nav__wrapper}>
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
              <Contacts />
              <div className={css.nav__menu_time}>
                <span>Время работы: с 11:00 до 23:00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
