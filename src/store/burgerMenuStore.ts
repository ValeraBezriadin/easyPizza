import { create } from "zustand";

interface IMenuState{
  menuIsOpen:boolean,
  toggleMenu:()=>void,
}
export const useBurgerMenuStore = create<IMenuState>((set) => ({
  menuIsOpen: false,
  toggleMenu: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
}));
