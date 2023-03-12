// import Logo from "../assets/Logo.png"
import React from "react";
// import "../index.css";
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router-dom"
const PurchaseHome = () => {
    const navigate = useNavigate()
  return (
    <div className="purchase-home">
      <img src={Logo} className="purchase-logo" alt="" />
      <p className="purchase-p1"> Saylani Welfare</p>
      <p className="purchase-p2"> Online Market Place</p>
    <button className="purchase-btn" onClick={()=>navigate("/PurchaseSignup")}>Get Started </button>
    </div>
  );
};
export default PurchaseHome
