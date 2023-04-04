import React from "react";
import "./Footer.css";
import SultanLogo from "../SultanLogo/SultanLogo";
import ContactList from "../ContactList/ContactList";
import SearchArea from "../SearchArea/SearchArea";
import ButtonYellow from "../ButtonYellow/ButtonYellow";
import telegram from "../../img/telegram.png";
import whatsapp from "../../img/whatsapp.png";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__row">
        <SultanLogo color="white" />
        <div className="firstRow__mainText">
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
          Кокчетаве и Акмолинской области
        </div>
        <div className="firstRow__beforeArea">Подпишись на скидки и акции</div>
        <div>
          <SearchArea
            width={220}
            text="Введите ваш E-mail"
            icon="fa-solid fa-chevron-right"
          />
        </div>
      </div>
      <div className="Footer__row">
        <div className="Footer__article">Меню сайта:</div>
        <ul className="Footer__row--list">
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="Footer__row">
        <div className="Footer__article">Категории:</div>
        <ul className="Footer__row--list">
          <li>Бытовая химия</li>
          <li>Косметика и гигиена</li>
          <li>Товары для дома</li>
          <li>Товары для детей и мам</li>
          <li>Посуда</li>
        </ul>
      </div>
      <div className="Footer__row">
        <div className="Footer__article">Скачать прайс-лист:</div>
        <ul className="Footer__row--list">
          <li>
            <ButtonYellow text="Прайс-лист" img="fa-solid fa-download" />
          </li>
          <li className="fourthRow__beforeLogos">Связь в мессенджерах:</li>
          <li className="fourthRow__logos">
            <img src={whatsapp} alt="" />
            <img src={telegram} alt="" />
          </li>
        </ul>
      </div>
      <div className="Footer__row">
        <div className="Footer__article">Контакты:</div>
        <ul className="Footer__row--list">
          <li>
            <ContactList color="white" />
          </li>
          <li>
            <div className="lastRow__email">opt.sultan@mail.ru</div>
            <div className="lastRow__desription">На связи в любое время</div>
          </li>
          <li className="lastRow__logos">
            <img src={visa} alt="" />
            <img src={mastercard } alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
