"use client";
import { FC } from "react";
import css from "./style.module.css";
import Modal from "@/components/ui/Modal";
import BurgerMenu from "@/components/ui/BurgerMenu";
import TopNavigation from "@/components/ui/TopNavigation";
import DownNavigation from "@/components/ui/DownNavigation";
import CartModal from "@/components/ui/CartModal";
import { userCartMenu } from "@/store/cartMenu";

const Header: FC = () => {
  const { cartMenuIsOpen, cartMenuToggle } = userCartMenu();
  return (
    <>
      <nav className={css.nav}>
        <TopNavigation />
        <div className={"container"}>
          <DownNavigation />
          <BurgerMenu />
        </div>
      </nav>
      <Modal isOpen={cartMenuIsOpen} toggle={cartMenuToggle}>
        <CartModal />
      </Modal>
    </>
  );
};

export default Header;
