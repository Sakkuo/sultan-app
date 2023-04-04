import React from "react";
import "./ButtonYellow.css";

const ButtonYellow = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className="ButtonYellow">
      <div className="button__text">{text}</div>
      <div className="button__img">
        <i className={img}></i>
      </div>
    </div>
  );
};

export default ButtonYellow;
