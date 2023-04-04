import React from "react";
import "./ContactList.css";

const ContactList = ({color} : {color: string}) => {
  return (
    <div className={color === 'black' ? "ContactList" : "ContactList ContactList--white"}>
        <div className="ContactList__number">+7 (777) 490-00-91</div>
        <div className="ContactList__time">время работы: 9:00-20:00</div>
        <div className="ContactList__button">Заказать звонок</div>
    </div>
  );
};

export default ContactList;
