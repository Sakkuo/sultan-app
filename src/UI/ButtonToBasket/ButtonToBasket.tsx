import React from "react";
import "./ButtonToBasket.css";

interface IButtonToBasket {
  onClick: (key: number) => void
  number: number

}


const ButtonToBasket:React.FC<IButtonToBasket> = ({onClick, number}) => {
  return (
    <div className="ButtonToBasket" onClick={(e) => {
      e.stopPropagation()
      onClick(number)}}>
      <div className="ButtonToBasket__text">в корзину</div>
      <div className="ButtonToBasket__icon">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </div>
    </div>
  );
};

export default ButtonToBasket;
