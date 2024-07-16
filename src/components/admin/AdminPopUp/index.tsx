import React, { FC } from "react";
import css from "./style.module.css";
import Image from "next/image";
import closeIMg from "@/static/icons/close.svg";
interface IProps {
  activePopup: boolean;
  setActivePopup: (arg0: boolean) => void;
  children: React.ReactNode;
}

const AdminPopUp: FC<IProps> = ({ activePopup, setActivePopup, children }) => {
  if (!activePopup) {
    return null;
  }
  return (
    <div
      className={activePopup ? css.popup__active + " " + css.popup : css.popup}
    >
      <div className={css.popup__contain}>
        <button
          className={css.popup__close}
          onClick={() => setActivePopup(false)}
        >
          <Image
            src={closeIMg}
            alt={"close popup window"}
            width={15}
            height={15}
          ></Image>
        </button>
        {children}
      </div>
    </div>
  );
};

export default AdminPopUp;
