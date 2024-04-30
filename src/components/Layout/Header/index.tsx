"use client";
import { FC } from "react";
import css from "./style.module.css";

import BurgerMenu from "@/components/ui/BurgerMenu";
import TopNavigation from "@/components/ui/TopNavigation";
import DownNavigation from "@/components/ui/DownNavigation";

const Header: FC = () => {
  return (
    <>
      <nav className={css.nav}>
        <TopNavigation />
        <div className={"container"}>
          <DownNavigation />
          <BurgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Header;
