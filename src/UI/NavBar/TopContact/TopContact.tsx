import React from "react";
import './TopContact.css'

const TopContact: React.FC = () => {
  return (
    <div className="contact__div">
      <div className="contact__adress">
        <i className="fa-solid fa-location-dot navbar__icon"></i>

        <div className="adress__text">
          <div className="adress__text--main">г. Кокчетав, ул. Ж. Ташенова 129Б</div>
          <div className="adress__text--extra">(Рынок Восточный)</div>
        </div>
      </div>
      <div className="contact__mail">
        <i className="fa-regular fa-envelope navbar__icon"></i>

        <div className="mail__text">
          <div className="mail__text--main">opt.sultan@mail.ru</div>
          <div className="mail__text--extra">На связи в любое время</div>
        </div>
      </div>
    </div>
  );
};

export default TopContact;
