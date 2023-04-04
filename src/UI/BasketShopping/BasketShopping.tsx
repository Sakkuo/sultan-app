import React, { useEffect, useState } from "react";
import "./BasketShopping.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { filterSlice } from "../../store/reducers/FilterSlice";

const BasketShopping = () => {
  const { basketObject } = useAppSelector((state) => state.filterReducer);
  const { setAllPrice } = filterSlice.actions;
  const [priceSum, setPriceSum] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  useEffect(() => {
    setPriceSum(
      Object.entries(basketObject).reduce(
        (sum, arr) => sum + JSON.parse(localStorage.getItem(arr[0])!).price * arr[1],
        0
      )
    );
    setQuantity(
      Object.entries(basketObject).reduce((quantity, arr) => quantity + arr[1], 0)
    );
  }, [basketObject]);

  useEffect(() => {
    dispatch(setAllPrice(priceSum))
  }, [priceSum])

  return (
    <div className="BasketShopping" onClick={() => navigate("/basket")}>
      <div className="BasketShopping__img">
        <div className="BasketShopping__img--value">{quantity}</div>
        <i className="fa-solid fa-cart-shopping BasketShopping__img--img"></i>
      </div>
      <div className="BasketShopping__text">
        <span className="BasketShopping__text--basket">Корзина</span>
        <span className="BasketShopping__text--price">{priceSum} ₸</span>
      </div>
    </div>
  );
};

export default BasketShopping;
