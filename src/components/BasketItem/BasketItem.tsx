import React, { useEffect, useState } from "react";
import "./BasketItem.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";
import { IProduct } from "../../models/IProduct";
import { useLocation } from "react-router-dom";

interface IRenderBasketItemProps {
  item: any[];
  index: number;
}

const RenderBasketItem: React.FC<IRenderBasketItemProps> = ({ item, index }) => {
  const { basketObject } = useAppSelector((state) => state.filterReducer);
  const { updateBasketObject, deleteBasketProperty } = filterSlice.actions;
  const [quantity, setQuantity] = useState(item[1]);



  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateBasketObject({ property: `${item[0]}`, value: quantity }));
  }, [quantity]);

  console.log(item);

  let itemData: IProduct = JSON.parse(localStorage.getItem(item[0])!);
  let quantityItem = item[1];
  console.log(quantityItem);

  return (
    <div className="Basket__container" key={index}>
      <div className="Basket__imgAndText">
      <div className="Basket__row Basketrow__image">
        <img className="Basket__mainImage" src={itemData.image_url} alt="" />
      </div>
      <div className="Basket__row Basket__row--text">
        <div className="Basket__rowWeight">
          {itemData.size_type === "вес" ? (
            <i className="fa-solid fa-box-open"></i>
          ) : (
            <i className="fa-solid fa-bottle-droplet"></i>
          )}
          {itemData.size}
        </div>
        <div className="Basket__rowArticle">
          {itemData.brand} {itemData.name}
        </div>
        <div className="Basket__rowDescription">{itemData.description}</div>
      </div>
      </div>
      <div className="Basket__row row__priceButtons">
        <div className="ProductPage__setQuantity Basket__setQuantity">
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
          <div
            className="setQuantity__plus setQuantity__sign"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </div>
        </div>
        <div className="Basket__price">{itemData.price * quantity} ₸</div>
        <div className="Basket__delete" onClick={() => dispatch(deleteBasketProperty(item[0]))}>
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default RenderBasketItem;
