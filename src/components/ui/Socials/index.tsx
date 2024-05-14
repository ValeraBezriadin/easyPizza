import { FC } from "react";
import css from "./style.module.css";
import Image from "next/image";
import phoneImg from "@/static/icons/phone.svg";
import pinImg from "@/static/icons/pin.svg";
import facebookImg from "@/static/icons/facebooksvg.svg";
import instagramImg from "@/static/icons/instagram.svg";

const Socials: FC = () => {
  return (
    <>
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
    </>
  );
};

export default Socials;
