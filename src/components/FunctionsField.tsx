import React, { useState } from "react";
import { IProduct } from "../models/IProduct";
import ProductComponent from "./ProductComponent/ProductComponent";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterSlice } from "../store/reducers/FilterSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "../UI/Pagination/Pagination";

export const RenderProducts = (data: IProduct[], sortingType: string) => {
  if (sortingType === "name-toBottom") {
    data.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (sortingType === "name-toTop") {
    data.sort((a, b) => b.brand.localeCompare(a.brand));
  } else if (sortingType === "price-toTop") {
    data.sort((a, b) => a.price - b.price);
  } else if (sortingType === "price-toBottom") {
    data.sort((a, b) => b.price - a.price);
  }

  return data;
};

export const Test = (items: IProduct[]) => {
  const { filterType } = useAppSelector((state) => state.filterReducer);

  const filteredItems = filterType
    ? items.filter((item) => item.type_of_care.includes(filterType))
    : items;

  return filteredItems;
};

interface IFiltersProps {
  filter: string;
  setFilter: any;
  className?: string;
}

export const Filters: React.FC<IFiltersProps> = ({
  filter,
  setFilter,
  className,
}) => {
  const { changeFilterType } = filterSlice.actions;

  const dispatch = useAppDispatch();

  let typeArray: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const singleType: string[] = JSON.parse(
      localStorage.getItem(localStorage.key(i)!)!
    ).type_of_care;

    for (let i = 0; i < singleType.length; i++) {
      if (!typeArray.includes(singleType[i])) {
        typeArray = [...typeArray, singleType[i]];
      }
    }
  }


  const handleFilterClick = (type: any) => {
    if (filter === type) {
      dispatch(changeFilterType(""));
      setFilter("");
    } else {
      dispatch(changeFilterType(type));
      setFilter(type);
    }
  };

  return (
    <div className={"filteringButtons " + `${className}`}>
      {typeArray.map((type) => (
        <div
          className={
            filter === type
              ? "filteringButton filteringButton--active"
              : "filteringButton"
          }
          key={type}
          onClick={() => handleFilterClick(type)}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export const FilterProductsByPrice = (data: IProduct[]) => {
  const { minPrice, maxPrice } = useAppSelector((state) => state.filterReducer);

  const filteredProducts = data.filter(
    (data) => data.price >= +minPrice && data.price <= +maxPrice
  );

  return filteredProducts;
};

export const handlePriceChange = (e: any, dispatch: any) => {
  const newValue = e.target.value.replace(/\D/, "");
  if (newValue === "" || newValue === "0") {
    dispatch("");
  } else {
    dispatch(newValue);
  }
};

export const FilterByManufacturer = (products: IProduct[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const { manufacturer } = useAppSelector((state) => state.filterReducer);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const navigate = useNavigate();
  const filteredProducts = manufacturer
    ? products.filter((product) => product.manufacturer === manufacturer)
    : products;

    const pageCount = Math.ceil(filteredProducts.length / pageSize);
    const visibleData = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  return (
    <div>
    <div className="ProductsField">
      {visibleData.map((product, i: number) => (
        <ProductComponent
          data={product}
          key={i}
          onClick={() => navigate("/product/" + product.barcode)}
        />
      ))}
    </div>
    <Pagination currentPage={currentPage} totalPages={pageCount} onPageChange={handlePageChange} />

    </div>
  );
};
