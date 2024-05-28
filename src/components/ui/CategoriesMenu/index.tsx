import React from "react";
import css from "./style.module.css";
import Link from "next/link";
import { Icon } from "../Icon";
import categoriesList from "@/utils/categries";
const CategoriesMenu = () => {
  return (
    <section className={css.menu}>
      <div className="container">
        <ul className={css.menu__list}>
          {categoriesList.map((i) => (
            <li key={i.name} className={css.menu__item}>
              <Link href={`/${i.name}`} className={css.menu__link}>
                <Icon
                  name={
                    i.name as
                      | "fire"
                      | "pizza"
                      | "sushi"
                      | "drinks"
                      | "snack"
                      | "combo"
                      | "deserts"
                      | "souce"
                      | "cart"
                      | "close"
                      | "downArrow"
                      | "facebooksvg"
                      | "instagram"
                      | "logoMain"
                      | "phone"
                      | "pin"
                      | "signIn"
                  }
                  width={i.width}
                  height={i.height}
                  active={false}
                />
                <span className={css.menu__text}>{i.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesMenu;
