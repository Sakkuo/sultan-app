import React from "react";
import TopContact from "./TopContact/TopContact";
import "./NavBar.css";
import NavigationList from "./NavigationList/NavigationList";

import ButtonYellow from "../ButtonYellow/ButtonYellow";
import SultanLogo from "../SultanLogo/SultanLogo";
import SearchArea from "../SearchArea/SearchArea";
import Slash from "./Slash/Slash";
import SupportBlock from "../SupportBlock/SupportBlock";
import BasketShopping from "../BasketShopping/BasketShopping";
import ReducedNav from "../ReducedNav/ReducedNav";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="NavBar">
      <div className="NavBar__top">
        <TopContact />
        <div onClick={() => navigate('/admin')} style={{cursor: 'pointer'}}>Админка</div>
        <NavigationList />
      </div>
      <Slash />
      <div className="NavBar__bottom">
        <SultanLogo color='default '/>
        <div className="NavBar__yellowButton">
          <ButtonYellow text='Каталог' img='fa-solid fa-table-cells-large'/>
        </div>
        <div className="NavBar__searchArea">
          <SearchArea width={238} text="Поиск..." icon="fa-solid fa-magnifying-glass"/>
        </div>
        <SupportBlock />
        <div className="NavBar__priceList">
          <ButtonYellow text='Прайс-лист' img='fa-solid fa-download'/>
        </div>
        <BasketShopping />
      </div>
      <Slash />
      <ReducedNav />
    </div>
  );
};

export default NavBar;
