"use client";
import React, { FC, useState } from "react";
import css from "./style.module.css";
import ProductsList from "./ProductsList";
import ProductsFilter from "./ProductsFilter";
import { IProduct } from "@/utils/productsItem";
interface IProps {
  title: string;
  data: IProduct[];
}
const Products: FC<IProps> = ({ title, data }) => {
  const [renderData, SetRenderData] = useState(data);
  return (
    <section className={css.products}>
      <div className="container">
        <div className={css.products__top}>
          <h2 className={css.products__title}>{title}</h2>
          <ProductsFilter data={data} setData={SetRenderData} />
        </div>
        <ProductsList data={renderData} />
      </div>
    </section>
  );
};

export default Products;
