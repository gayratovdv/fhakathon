import React from "react";
import "./group.css";
import Images from "../../utils/images";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const GroupCard = () => {
  return (
    <div className="group-card">
      <div className="group__content">
        <img src={Images.circleImage} alt="Image1" />
        <h2>Gruppalar</h2>
      </div>
      <hr className="group-hr" />
      <div className="group__content--wrapper">
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p style={{ color: "white" }}>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/students">Tekshirish</Link>
          </button>
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p style={{ color: "white" }}>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/students">Tekshirish</Link>
          </button>
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p style={{ color: "white" }}>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/students">Tekshirish</Link>
          </button>
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p style={{ color: "white" }}>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
          <button className="group__card--card-button">
            <Link to="/home/students">Tekshirish</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
