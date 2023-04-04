import React, { useEffect } from "react";
import "./ProductComponent.css";
import { IProduct } from "../../models/IProduct";
import ButtonToBasket from "../../UI/ButtonToBasket/ButtonToBasket";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";

interface IProducteComponentProps {
  data: IProduct;
  onClick: (id: number | undefined) => void;
}

const ProductComponent: React.FC<IProducteComponentProps> = ({ data, onClick }) => {
  const { basketObject } = useAppSelector((state) => state.filterReducer);
  const { addBasketProperty, updateBasketObject } = filterSlice.actions;

  const dispatch = useAppDispatch()

  const sendProductToBasket = (key: number) => {
    if (basketObject[key]) {
      dispatch(updateBasketObject({ property: `${key}`, value: basketObject[key] + 1}))
    } else {
      dispatch(addBasketProperty({property: `${key}`, value: 1}))
    }
  }


  return (
    <div className="ProductComponent" onClick={() => onClick(data.barcode)}>
      <div className="ProductComponent__row row__image">
        <div className="ProductComponent__image">
          <img src={data.image_url} alt="" />
        </div>
      </div>
      <div className="ProductComponent__row row__text">
        <div className="ProductComponent__weight">
          <div className="ProductComponent__weight--icon">
            {data.size_type === 'вес' ? <i className="fa-solid fa-box-open"></i> : <i className="fa-solid fa-bottle-droplet"></i>}
          </div>
          <div className="ProductComponent__weight--text">{data.size}</div>
        </div>
        <div className="ProductComponent__article">
          <span className="ProductComponent__article--brand">{data.brand}</span>{" "}
          {data.name}
        </div>
        <div className="ProductComponent__text">
          <div className="ProductComponent__barcode Product__textBlock">
            <div className="ProductComponent__barcode--article Product__article">
              Штрихкод:
            </div>
            <div className="ProductComponent__barcode--value Product__value">
              {data.barcode}
            </div>
          </div>
          <div className="ProductComponent__manufacturer Product__textBlock">
            <div className="ProductComponent__manufacturer--article Product__article">
              Производитель:
            </div>
            <div className="ProductComponent__manufacturer--value Product__value">
              {data.manufacturer}
            </div>
          </div>
          <div className="ProductComponent__brand Product__textBlock">
            <div className="ProductComponent__brand--article Product__article">
              Бренд:
            </div>
            <div className="ProductComponent__brand--value Product__value">
              {data.brand}
            </div>
          </div>
        </div>
      </div>
      <div className="ProductComponent__row">
        <div className="ProductComponent__priceButton">
          <div className="ProductComponent__price">{data.price} ₸</div>
          <div className="ProductComponent__button">
            <ButtonToBasket onClick={sendProductToBasket} number={data.barcode}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
