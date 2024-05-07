import { create } from "zustand";

interface IMenuState{
  cartMenuIsOpen:boolean,
  cartMenuToggle:()=>void,
}

export const userCartMenu = create<IMenuState>((set)=> ({
  cartMenuIsOpen:false,
  cartMenuToggle:() => set((state)=>( { cartMenuIsOpen: !state.cartMenuIsOpen})) ,
}))