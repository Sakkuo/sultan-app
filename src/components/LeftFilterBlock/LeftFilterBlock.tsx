import React, { useEffect, useMemo, useState } from "react";
import "./LeftFilterBlock.css";
import { filterSlice } from "../../store/reducers/FilterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Filters, handlePriceChange } from "../FunctionsField";
import FilterArticle from "../../UI/FilterArticle/FilterArticle";
import SearchArea from "../../UI/SearchArea/SearchArea";
import { products } from "../../data";
import { IProduct } from "../../models/IProduct";

const LeftFilterBlock = () => {
  const [minPriceBlock, setMinPrice] = useState("1");
  const [maxPriceBlock, setMaxPrice] = useState("3000");
  const [manufacturersFilter, setManufacturersFilter] = useState("");
  const { changeMaxPrice, changeMinPrice, changeManufacturer, changeFilterType } = filterSlice.actions;
  const { filterType } = useAppSelector((state) => state.filterReducer);

  const [query, setQuery] = useState("");

  const ProductList = ({ products }: { products: IProduct[] }) => {
    const manufacturers: any = {};

    products.forEach((product) => {
      if (manufacturers[product.manufacturer]) {
        manufacturers[product.manufacturer]++;
      } else {
        manufacturers[product.manufacturer] = 1;
      }
    });

    const manufacturerList = Object.keys(manufacturers).map((manufacturer) => {
      return `${manufacturer} ${manufacturers[manufacturer]}`;
    });

    const filteredList = manufacturerList.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });

    const renderList = query ? filteredList : manufacturerList;
    return (
      <ul className="ManufacturerFilter__list">
        <div
          className="ManufacturerFilter__string ManufacturerFilter__string--button"
          key={5132537}
        >
          <button name="manufacturer" onClick={() => setManufacturersFilter("")} />
          <li>Очистить значение</li>
        </div>
        {renderList.map((item, index) => {
          const separetedItem = item.split(" ");
          return (
            <div className="ManufacturerFilter__string" key={index}>
              <input
                type="radio"
                checked={manufacturersFilter === separetedItem[0] ? true : false}
                name="manufacturer"
                value={separetedItem[0]}
                onChange={(e) => setManufacturersFilter(e.currentTarget.value)}
              />
              <li>
                {separetedItem[0]}{" "}
                <span className="ManufacturerFilter__string--quantity">
                  ({separetedItem[1]})
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    );
  };

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeManufacturer(manufacturersFilter));
  }, [manufacturersFilter]);

  useEffect(() => {
    dispatch(changeMinPrice(minPriceBlock));
  }, [minPriceBlock]);

  useEffect(() => {
    dispatch(changeMaxPrice(maxPriceBlock));
  }, [maxPriceBlock]);

  return (
    <div className="LeftFilterBlock">
      <div className="PriceFilter">
        <div className="PriceFilter__text">
          <div className="PriceFilter__article">
            <FilterArticle text="ПОДБОР ПО ПАРАМЕТРАМ" />
          </div>
          <div className="PriceFilter__description">
            <span className="PriceFilter__description--price">Цена </span>
            <span className="PriceFilter__description--currency">₸</span>
          </div>
        </div>
        <div className="PriceFilter__wrapper">
          <div className="PriceFilter__value">
            <input
              style={{ color: "#3F4E65" }}
              type="number"
              value={minPriceBlock}
              onChange={(e) => {
                handlePriceChange(e, setMinPrice);
              }}
            />
          </div>
          <div className="PriceFilter__separator">-</div>
          <div className="PriceFilter__value">
            <input
              style={{ color: "#3F4E65" }}
              type="number"
              value={maxPriceBlock}
              onChange={(e) => {
                handlePriceChange(e, setMaxPrice);
              }}
            />
          </div>
        </div>
      </div>
      <div className="ManufacturerFilter">
        <div className="ManufacturerFilter__article">Производитель</div>
        <div className="ManufacturerFilter__search">
          <SearchArea
            icon="fa-solid fa-magnifying-glass"
            text="Поиск..."
            width={238}
            onChange={handleInputChange}
            value={query}
          />
        </div>
        <ProductList products={products} />
      </div>
      <Filters setFilter={changeFilterType} filter={filterType} className="LeftTypeFilter"/>
    </div>
  );
};

export default LeftFilterBlock;
