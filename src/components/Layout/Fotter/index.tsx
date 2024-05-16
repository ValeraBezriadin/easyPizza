import React from "react";
import css from "./style.module.css";
import Link from "next/link";
const Fotter = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <span className={css.footer__logo}>Куда пицца </span>

          <div className={css.footer__inner}>
            <ul className={css.footer__list}>
              <li className={css.footer__item}>
                <Link href={"#"}>Куда пицца</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>О компании</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Пользовательское</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Условия гарантии</Link>
              </li>
            </ul>
            <ul className={css.footer__list}>
              <li className={css.footer__item}>
                <Link href={"#"}>Помощь</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Пользовательское</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Условия гарантии</Link>
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Поддержка</Link>{" "}
              </li>
              <li className={css.footer__item}>
                <Link href={"#"}>Отследить заказ</Link>
              </li>
            </ul>
          </div>
          <ul className={css.footer__list}>
            <li className={css.footer__item}>Contacts</li>
            <li className={css.footer__item}>
              <div className={css.footer__socials}>
                <span className={css.footer__phone}>+7 (926) 223-10-11</span>
                <span className={css.footer__pin}>
                  Вінниця, проспект. Юності, 99
                </span>
                <div className={css.footer__wrapper}>
                  <span className={css.footer__facebook}>Facebok</span>
                  <span className={css.footer__instagram}>Instagram</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <span className={css.footer__down}>© Copyright 2021 — Куда Пицца</span>
      </div>
    </footer>
  );
};

export default Fotter;
