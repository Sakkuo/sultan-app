import React from "react";
import ProductsField from "../ProductsField/ProductsField";
import FilterTopBlock from "../../UI/FilterTopBlock/FilterTopBlock";
import LeftFilterBlock from "../LeftFilterBlock/LeftFilterBlock";
import './MainPage.css'

const MainPage: React.FC = () => {
  return (
    <div>
      <FilterTopBlock />
      <div className="MainPage__tabs">
        <div className="MainPage__row MainPage__row--first">
          <LeftFilterBlock />
        </div>
        <div className="MainPage__row MainPage__row--second">
          <ProductsField />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
