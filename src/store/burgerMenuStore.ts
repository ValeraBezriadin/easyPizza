import { create } from "zustand";

interface IMenuState{
  burgerMenuIsOpen:boolean,
  burgerMenuToggle:()=>void,
}
export const useBurgerMenuStore = create<IMenuState>((set) => ({
  burgerMenuIsOpen: false,
  burgerMenuToggle: () => set((state) => ({ burgerMenuIsOpen: !state.burgerMenuIsOpen })),
}));
