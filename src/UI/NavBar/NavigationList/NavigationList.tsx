import React from "react";
import "./NavigationList.css";

const NavigationList: React.FC = () => {
  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li>О компании</li>
        <li>Доставка и оплата</li>
        <li>Возврат</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default NavigationList;
