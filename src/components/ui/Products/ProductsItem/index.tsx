import Image from "next/image";
import css from "./style.module.css";
import { StaticImageData } from "next/image";
interface IProps {
  item: IProduct;
}
interface IProduct {
  title: string;
  description: string;
  price: number;
  imageUrl: StaticImageData;
  isNew: boolean;
  isHit: boolean;
}
const ProductsItem = ({ item }: IProps) => {
  const { description, price, title, imageUrl, isNew, isHit } = item;
  return (
    <>
      <li>
        <article className={css.products__item}>
          <div className={css.products__meta}>
            {isNew && <span className={css.products__modificator}>NEW</span>}
            {isHit && <span className={css.products__modificator}>HOT</span>}
          </div>
          <Image
            className={css.products__img}
            src={imageUrl}
            width="300"
            height="300"
            alt="pizza"
          />
          <div className={css.products__wrraper}>
            <h3>{title}</h3>
            <span className={css.products__text}>{description}</span>
            <div className={css.products__inner}>
              <span className={css.products__price}>From {price}$</span>
              <button className={css.products__choose}>Сhoose</button>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default ProductsItem;
