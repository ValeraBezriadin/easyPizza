"use client";
import React, { FC } from "react";
import css from "./style.module.css";
import ProductsItem from "../ProductsItem";
import { IProduct } from "@/utils/productsItem";
interface IProps {
  data: IProduct[];
}

const ProductsList: FC<IProps> = ({ data }) => {
  return (
    <ul className={css.products__list}>
      {data.map((product) => (
        <ProductsItem key={product.title} item={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
