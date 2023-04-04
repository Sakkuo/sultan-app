import React, { useEffect, useState } from "react";
import "./Basket.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import RenderBasketItem from "../BasketItem/BasketItem";
import { filterSlice } from "../../store/reducers/FilterSlice";

const Basket = () => {
  const { basketObject, allPrice } = useAppSelector((state) => state.filterReducer);
  const [blockHidden, setBlockHidden] = useState(true)
  const { deleteAllBasketProperty } = filterSlice.actions;

  const changeBlockHiddenState = () => {
    setBlockHidden(false)
    setTimeout(() => {
      setBlockHidden(true)
    }, 5000)
  }

  const dispatch = useAppDispatch();

  return (
    <div className="Basket">
      <div className="Basket__article">Корзина</div>
      <div className="Basket__hiddenBlock" hidden={blockHidden}>
        Спасибо за заказ
      </div>
      <div>
        {Object.entries(basketObject).map((item, index) => (
          <RenderBasketItem item={item} index={index} key={index} />
        ))}
      </div>
      <div className="Basket__allPriceAndButton">
        <div className="Basket__confirmButton" onClick={() => {
          dispatch(deleteAllBasketProperty())
          changeBlockHiddenState()
          }}>
          Оформить заказ
        </div>
        <div className="Basket__allPrice">{allPrice} ₸</div>
      </div>
    </div>
  );
};

export default Basket;
