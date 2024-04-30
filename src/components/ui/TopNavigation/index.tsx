import React from "react";
import css from "./style.module.css";

const TopNavigation = () => {
  return (
    <>
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
    </>
  );
};

export default TopNavigation;
