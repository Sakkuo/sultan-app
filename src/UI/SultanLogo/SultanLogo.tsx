import React from "react";
import letter1 from "../../img/letter1.png";
import letter2 from "../../img/letter2.png";
import letter3 from "../../img/letter3.png";
import letter4 from "../../img/letter4.png";
import letter5 from "../../img/letter5.png";
import letter6 from "../../img/letter6.png";
import sultan from "../../img/sultan.png";
import "./SultanLogo.css";
import { useNavigate } from "react-router-dom";

const SultanLogo = ({ color }: { color: string }) => {
  const navigate = useNavigate()
  return (
    <div className="Sultan__logo" onClick={() => navigate('/')}>
      <img
        className={color === "white" ? "logo__img--white" : "logo__img"}
        src={sultan}
        alt=""
        
      />
      <div className={color === "white" ? "logo__name--white" : "logo__name"}>
        <img src={letter1} alt="" />
        <img src={letter2} alt="" />
        <img src={letter3} alt="" />
        <img src={letter4} alt="" />
        <img src={letter5} alt="" />
        <img src={letter6} alt="" />
      </div>
    </div>
  );
};

export default SultanLogo;
