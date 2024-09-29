import React from "react";
import "./group.css";
import Images from "../../utils/images";

const GroupCard = () => {
  return (
    <div className="group-card">
      <div className="group__content">
        <img src={Images.circleImage} alt="Image1" />
        <h2>Группы</h2>
      </div>
      <hr className="group-hr" />
      <div className="group__card--card">
        <div className="group__card--card-content">
          <img src={Images.reactImage} alt="Image1" />
          <h3>FRONT-001</h3>
          <p>Sunnatbek Yusupov</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Студенты</h3>
          <p>9</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Время</h3>
          <p>17:00</p>
        </div>
        <button className="group__card--card-button">Проверять</button>
      </div>
      <div className="group__card--card">
        <div className="group__card--card-content">
          <img src={Images.reactImage} alt="Image1" />
          <h3>FRONT-001</h3>
          <p>Sunnatbek Yusupov</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Студенты</h3>
          <p>9</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Время</h3>
          <p>17:00</p>
        </div>
        <button className="group__card--card-button">Проверять</button>
      </div>
      <div className="group__card--card">
        <div className="group__card--card-content">
          <img src={Images.reactImage} alt="Image1" />
          <h3>FRONT-001</h3>
          <p>Sunnatbek Yusupov</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Студенты</h3>
          <p>9</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Время</h3>
          <p>17:00</p>
        </div>
        <button className="group__card--card-button">Проверять</button>
      </div>
      <div className="group__card--card">
        <div className="group__card--card-content">
          <img src={Images.reactImage} alt="Image1" />
          <h3>FRONT-001</h3>
          <p>Sunnatbek Yusupov</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Студенты</h3>
          <p>9</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Время</h3>
          <p>17:00</p>
        </div>
        <button className="group__card--card-button">Проверять</button>
      </div>
      <div className="group__card--card">
        <div className="group__card--card-content">
          <img src={Images.reactImage} alt="Image1" />
          <h3>FRONT-001</h3>
          <p>Sunnatbek Yusupov</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Студенты</h3>
          <p>9</p>
        </div>
        <div className="group__card--card-wrapper">
          <h3>Время</h3>
          <p>17:00</p>
        </div>
        <button className="group__card--card-button">Проверять</button>
      </div>
    </div>
  );
};

export default GroupCard;
