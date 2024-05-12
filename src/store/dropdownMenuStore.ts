import { create } from "zustand";

interface IMenuState{
  dropdownMenuIsOpen:boolean,
  dropdownMenuToggle:()=>void,
  dropdownMenuList:string[],
  dropdownMenuButtonText:string,
  dropdownMenuButtonSetText:(text:string)=>void,
}

export const userdropdownMenu = create<IMenuState>((set)=> ({
  dropdownMenuList:[
    "kiev",
    "123456789qwer",
    "kiev",
    "vinicsgaaghoif",
    "vinicvinicsgaaghoiicsgaaghoi",
  ],
  dropdownMenuButtonText:"none",
  dropdownMenuButtonSetText:(text) => set(()=>( { dropdownMenuButtonText: text })),
  dropdownMenuIsOpen:false,
  dropdownMenuToggle:() => set((state)=>( { dropdownMenuIsOpen: !state.dropdownMenuIsOpen})) ,
}))