import { create } from "zustand";

interface IMenuState{
  dropdownMenuIsOpen:boolean,
  dropdownMenuToggle:()=>void,
  dropdownMenuList:string[],
  dropdownMenuButtonText:string,
  dropdownMenuButtonSetText:(string)=>string,
}

export const userdropdownMenu = create<IMenuState>((set)=> ({
  dropdownMenuList:[
    "kiev",
    "Владивасток",
    "123456789qwer",
    "kiev",
    "Владивасток",
    "vinicsgaaghoif",
    "vinicvinicsgaaghoiicsgaaghoi",
  ],
  dropdownMenuButtonText:"none",
  dropdownMenuButtonSetText:(text) => set((state)=>( { dropdownMenuButtonText: text })),
  dropdownMenuIsOpen:false,
  dropdownMenuToggle:() => set((state)=>( { dropdownMenuIsOpen: !state.dropdownMenuIsOpen})) ,
}))