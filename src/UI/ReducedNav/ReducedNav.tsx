import React from "react";
import "./ReducedNav.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const ReducedNav = () => {
  const { id } = useAppSelector((state) => state.filterReducer);
  const location = useLocation();

  const navigate = useNavigate();

  const takeProductName = () => {
    switch (location.pathname) {
      case "/":
        return <span>Главная</span>;
      case "/basket":
        return (
          <div className="ReducedNav__block">
            <span className="ReducedNav__main" onClick={() => navigate("/")}>
              Главная
            </span>
            <div> - Корзина</div>
          </div>
        );

      case `/product/${id}`:
        return (
          <div className="ReducedNav__block">
            <span className="ReducedNav__main" onClick={() => navigate("/")}>
              Главная
            </span>
            <div>
              - {JSON.parse(localStorage.getItem(id!)!).brand}{" "}
              {JSON.parse(localStorage.getItem(id!)!).name}
            </div>
          </div>
        );
    }
  };

  return <div className="ReducedNav">{takeProductName()}</div>;
};

export default ReducedNav;
