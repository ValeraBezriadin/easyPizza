"use client";
import React, { FC, ReactNode, useEffect } from "react";
import css from "./style.module.css";
import cn from "classnames";

interface ModuleProps {
  isOpen: boolean;
  children: ReactNode;
  toggle: () => void;
}

const Module: FC<ModuleProps> = ({ isOpen, children, toggle }) => {
  useEffect(() => {
    if (isOpen) {
      let startTouchX: number = 0;
      let endTouchX: number = 0;
      let startTouchY: number = 0;
      let endTouchY: number = 0;

      const handleTouchStart = (event: TouchEvent) => {
        startTouchX = event.changedTouches[0].pageX;
        startTouchY = event.changedTouches[0].pageY;
      };

      const handleTouchEnd = (event: TouchEvent) => {
        endTouchX = event.changedTouches[0].pageX;
        endTouchY = event.changedTouches[0].pageY;
        if (
          endTouchY > startTouchY &&
          startTouchY < 130 &&
          Math.abs(endTouchX - startTouchX) < 100 &&
          endTouchY - startTouchY > 50 &&
          endTouchY - startTouchY < 450
        ) {
          toggle();
        }
      };

      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isOpen]);

  return (
    <div
      className={cn(css.modal, {
        [css.active]: isOpen,
      })}
    >
      {children}
    </div>
  );
};

export default Module;
