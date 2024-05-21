import Link from "next/link";
import React, { FC } from "react";
import css from "./style.module.css";

const Contacts: FC = () => {
  return (
    <div className={css.footer__socials}>
      <Link className={css.footer__phone} href={"tel:+79262231011"}>
        +7 (926) 223-10-11
      </Link>

      <address className={css.footer__pin}>
        Вінниця, проспект. Юності, 99
      </address>

      <div className={css.footer__wrapper}>
        <span className={css.footer__facebook}>Facebok</span>
        <span className={css.footer__instagram}>Instagram</span>
      </div>
    </div>
  );
};

export default Contacts;
