import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { IProduct } from "../../models/IProduct";
import arrow from "../../img/arrow.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";

type ProductItemPageParams = {
  id: string;
};

const ProductPage = () => {
  const [isHiddenDesc, setIsHiddenDesc] = useState(true);
  const [isHiddenAllCharacteristics, setIsHiddenAllCharacteristics] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const { basketObject, id } = useAppSelector((state) => state.filterReducer);
  const { addBasketProperty, updateBasketObject, reportId } = filterSlice.actions;

  const dispatch = useAppDispatch()

  const sendProductToBasket = (key: number) => {
    if (basketObject[key]) {
      dispatch(updateBasketObject({ property: `${key}`, value: basketObject[key] + quantity}))
    } else {
      dispatch(addBasketProperty({property: `${key}`, value: quantity}))
    }
  }

  const params = useParams<ProductItemPageParams>();

  useEffect(() => {
    console.log(params)
    dispatch(reportId(params.id!))
  }, [params])

  const productData: IProduct = JSON.parse(localStorage.getItem(params.id!)!);
  let typeOfProduct = "";

  if (productData.size_type === "вес") {
    typeOfProduct = "fa-solid fa-box-open";
  } else {
    typeOfProduct = "fa-solid fa-bottle-droplet";
  }

  const unpackCareType = (arr: string[]) => {
    let localString = "";
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        localString = localString + " " + arr[i] + ",";
      } else {
        localString = localString + " " + arr[i];
      }
    }
    return localString;
  };

  unpackCareType(productData.type_of_care);

  return (
    <div className="ProductPage">
      <div className="ProductPage__image">
        <img src={productData.image_url} alt="" />
      </div>
      <div className="ProductPage__text">
        <div className="ProductPage__available">В наличии</div>
        <div className="ProductPage__article">
          <span className="article__brand">{productData.brand}</span>{" "}
          {productData.name}
        </div>
        <div className="ProductPage__weight">
          <i className={typeOfProduct + " weigth__icon"}></i> {productData.size}
        </div>
        <div className="ProductPage__priceAndButton">
          <div className="ProductPage__price">{productData.price} ₸</div>
          <div className="ProductPage__setQuantity">
            <div
              className="setQuantity__minus setQuantity__sign"
              onClick={() => {
                if (quantity - 1 < 0) {
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </div>
            <div className="setQuantity__value">{quantity}</div>
            <div className="setQuantity__plus setQuantity__sign" onClick={() => setQuantity(quantity+1)}>+</div>
          </div>
          <div className="ProductPage__button" onClick={() => sendProductToBasket(productData.barcode)}>
            В корзину <i className="fa-solid fa-cart-shopping ProductPage__button--basket"></i>
          </div>
        </div>
        <div className="ProductPage__static">
          <div className="static__row row__withShare">
            <i className="fa-solid fa-share-nodes row__withShare--icon"></i>
          </div>
          <div className="static__row row__text">
            При покупке от <b>10 000 ₸</b> бесплатная <br /> доставка по Кокчетаву и
            области
          </div>
          <div className="static__row row__withDownload">
            Прайс-лист <i className="fa-solid fa-download"></i>
          </div>
        </div>
        <div className="ProductPage__characteristics">
          <div className="characteristics__manufacturer">
            <span className="characteristics__article">Производитель: </span>
            {productData.manufacturer}
          </div>
          <div className="characteristics__brand">
            <span className="characteristics__article">Бренд: </span>
            {productData.brand}
          </div>
          <div className="characteristics__barcode">
            <span className="characteristics__article">Штрихкод: </span>
            {productData.barcode}
          </div>
        </div>
        <div className="ProductPage__description">
          <div
            className="description__article hiddenBlock__article"
            onClick={() => setIsHiddenDesc(!isHiddenDesc)}
          >
            Описание{" "}
            <img
              src={arrow}
              alt=""
              style={isHiddenDesc ? { rotate: "0deg" } : { rotate: "180deg" }}
            />
          </div>
          <div className="description__text" hidden={isHiddenDesc}>
            {productData.description}
          </div>
        </div>
        <div className="ProductPage__allCharacteristics">
          <div
            className="allCharacteristics__article hiddenBlock__article"
            onClick={() =>
              setIsHiddenAllCharacteristics(!isHiddenAllCharacteristics)
            }
          >
            Характеристики{" "}
            <img
              src={arrow}
              alt=""
              style={
                isHiddenAllCharacteristics
                  ? { rotate: "0deg" }
                  : { rotate: "180deg" }
              }
            />
          </div>
          <div
            className="allCharacteristics__text"
            hidden={isHiddenAllCharacteristics}
          >
            <div className="allCharacteristics__careType">
              <span className="characteristics__article">Назначение: </span>
              {unpackCareType(productData.type_of_care)}
            </div>
            <div className="allCharacteristics__manufacturer">
              <span className="characteristics__article">Производитель: </span>
              {productData.manufacturer}
            </div>
            <div className="allCharacteristics__brand">
              <span className="characteristics__article">Бренд: </span>
              {productData.brand}
            </div>
            <div className="allCharacteristics__barcode">
              <span className="characteristics__article">Штрихкод: </span>
              {productData.barcode}
            </div>
            <div className="allCharacteristics__weight">
              <span className="characteristics__article">Объем: </span>
              {productData.size}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
