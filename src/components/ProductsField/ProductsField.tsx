import React, { useEffect, useState } from "react";
import "./ProductsField.css";
import { products } from "../../data";
import { FilterByManufacturer, FilterProductsByPrice, RenderProducts, Test } from "../FunctionsField";
import { useAppSelector } from "../../hooks/redux";
import { IProduct } from "../../models/IProduct";
import Pagination from "../../UI/Pagination/Pagination";

const ProductsField = () => {

  const { sortingType, basketObject } = useAppSelector((state) => state.filterReducer);


  let localStorageArr = []


  if (localStorage.length === 0) {
    products.forEach((product: IProduct) => {
      localStorage.setItem(`${product.barcode}`, JSON.stringify(product));
    });
  }
  for (let i: any = 0; i < localStorage.length; i++) {
    localStorageArr.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!))
  }



  return (
    <div>
      {FilterByManufacturer(FilterProductsByPrice(Test(RenderProducts(localStorageArr, sortingType))))}
    </div>
  );
};

export default ProductsField;
