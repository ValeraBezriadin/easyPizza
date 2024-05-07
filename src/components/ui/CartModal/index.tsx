"use client";
import React, { FC, useEffect } from "react";
import css from "./style.module.css";
import Image from "next/image";
import pizza from "@/static/icons/chikenSugarChili.png";
import { userCartMenu } from "@/store/cartMenu";
import cn from "classnames";

const CartModal: FC = () => {
  const { cartMenuIsOpen } = userCartMenu();

  return (
    <div className={css.cart__container}>
      <div
        className={cn(css.cart__content, {
          [css.active]: cartMenuIsOpen,
        })}
      >
        <h3 className={css.cart__title}>Your order</h3>
        <ul className={css.cart__list}>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
          <li className={css.cart__item}>
            <Image src={pizza} alt="pizza" width={84} height={84} />
            <div className={css.cart__item_right}>
              <h4 className={css.cart__item_title}>Чикен Сладкий Чили</h4>
              <span className={css.cart__item_text}>
                {" "}
                Традиционное тесто, 23 см
              </span>
              <div className={css.cart__wrapper}>
                <div className={css.cart__btn}>
                  <button className={css.cart__count}>-</button>
                  <span className={css.cart__count_text}>999</span>
                  <button className={css.cart__count}>+</button>
                </div>
                <span className={css.cart__price}>99999$</span>
              </div>
            </div>
          </li>
        </ul>
        <div className={css.cart__bottom}>
          <span className={css.cart__totalsum}>Итого: 999999 $</span>
          <button className={css.cart__confirm}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
