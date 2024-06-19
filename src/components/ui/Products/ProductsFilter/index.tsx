import React, { FC, useState, Dispatch, SetStateAction } from "react";
import css from "./style.module.css";
import { IProduct } from "@/utils/productsItem";

interface IProps {
  data: IProduct[];
  setData: Dispatch<SetStateAction<IProduct[]>>;
}

const ProductsFilter: FC<IProps> = ({ data, setData }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleAll = () => {
    setData(data);
    handleShowFilter();
  };
  const handleNew = () => {
    const filteredData = data.filter((product) => product.isNew);
    setData(filteredData);
    handleShowFilter();
  };

  const handleHit = () => {
    const filteredData = data.filter((product) => product.isHit);
    setData(filteredData);
    handleShowFilter();
  };

  const handleLowestPrice = () => {
    const filteredData = [...data].sort((a, b) => a.price - b.price);
    setData(filteredData);
    handleShowFilter();
  };

  const handleHighestPrice = () => {
    const filteredData = [...data].sort((a, b) => b.price - a.price);
    setData(filteredData);
    handleShowFilter();
  };

  return (
    <>
      <div className={css.produtcs__wrapper}>
        <button className={css.produtcs__button} onClick={handleShowFilter}>
          Filters
        </button>
        {showFilter && (
          <div className={css.products__list}>
            <button className={css.products__item} onClick={handleAll}>
              All products
            </button>
            <button className={css.products__item} onClick={handleNew}>
              NEW products
            </button>
            <button className={css.products__item} onClick={handleHit}>
              HOT products
            </button>
            <button className={css.products__item} onClick={handleLowestPrice}>
              Lowest price
            </button>
            <button className={css.products__item} onClick={handleHighestPrice}>
              Highest price
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsFilter;
