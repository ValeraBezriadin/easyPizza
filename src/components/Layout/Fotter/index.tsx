import React from "react";
import css from "./style.module.css";
import Link from "next/link";
import Contacts from "@/components/ui/Contacts";
const Fotter = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <span className={css.footer__logo}>Куда пицца </span>

          <div className={css.footer__inner}>
            <div className={css.list__wrapper}>
              <h4>Куда пицца</h4>

              <ul className={css.footer__list}>
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
            </div>
            <div className={css.list__wrapper}>
              <h4>Помощь</h4>
              <ul className={css.footer__list}>
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
          </div>
          <div className={css.contacts__container}>
            <h4>Contacts</h4>

            <Contacts />
          </div>
        </div>
        <span className={css.footer__down}>© Copyright 2021 — Куда Пицца</span>
      </div>
    </footer>
  );
};

export default Fotter;
