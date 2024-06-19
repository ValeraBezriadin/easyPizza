import pizza from "@/static/easypizzepng.png";
import sushi from "@/static/sushi.png";
import { StaticImageData } from 'next/image';
export interface IProduct {
  title: string;
  description: string;
  price: number;
  imageUrl: StaticImageData
  isNew:boolean
  isHit:boolean
}

export const  pizzaItems:IProduct[] = [
  {
    title:"Чикен Сладкий Чили",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:4550,
    imageUrl: pizza,
    isNew:true,
    isHit:true,
  },
  {
    title:"EASY PEASY огуречный расколбас",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:600,
    imageUrl: pizza,
    isNew:true,
    isHit:true,
  },
  {
    title:"EASY PEASY чикен а-ля хрен",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:555,
    imageUrl: pizza,
    isNew:true,
    isHit:true,
  },
  {
    title:"Чикен Сладкий Чили1",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:2134,
    imageUrl: pizza,
    isNew:false,
    isHit:true,
  },
  {
    title:"Чикен Сладкий Чили2",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:12442,
    imageUrl: pizza,
    isNew:true,
    isHit:false,
  },
  {
    title:"Чикен Сладкий Чили3",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:12424,
    imageUrl: pizza,
    isNew:false,
    isHit:false,
  },
  {
    title:"Чикен Сладкий Чили4",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:12424,
    imageUrl: pizza,
    isNew:false,
    isHit:false,
  },
  {
    title:"Чикен Сладкий Чили5",
    description:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc",
    price:124242142,
    imageUrl: pizza,
    isNew:true,
    isHit:false,
  },
  
  
]
export const sushiItems: IProduct[] = [
  {
    title: "Филадельфия",
    description: "Лосось, Сыр Филадельфия, Огурец, Рис, Нори",
    price: 444,
    imageUrl: sushi,
    isNew: true,
    isHit: false,
  },
  {
    title: "Калифорния",
    description: "Крабовое мясо, Авокадо, Огурец, Рис, Нори, Тобико",
    price: 4459,
    imageUrl: sushi,
    isNew: false,
    isHit: true,
  },
  {
    title: "Спайси тунец",
    description: "Тунец, Спайси соус, Огурец, Рис, Нори",
    price: 5499,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
  {
    title: "Дракон",
    description: "Угорь, Авокадо, Огурец, Рис, Нори, Унаги соус",
    price:155,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
  {
    title: "Эби",
    description: "Креветка, Огурец, Авокадо, Рис, Нори",
    price: 978,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
  {
    title: "Веган ролл",
    description: "Авокадо, Манго, Огурец, Рис, Нори",
    price: 76568,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
  {
    title: "Темпура ролл",
    description: "Лосось, Сыр Филадельфия, Авокадо, Темпура, Рис, Нори",
    price: 568,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
  {
    title: "Чикен ролл",
    description: "Курица, Огурец, Авокадо, Рис, Нори",
    price: 568,
    imageUrl: sushi,
    isNew: false,
    isHit: false,
  },
];


