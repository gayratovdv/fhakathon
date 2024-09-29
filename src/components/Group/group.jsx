import React from "react";
import "./group.css";
import Images from "../../utils/images";
import { Link } from "react-router-dom";
const GroupCard = () => {
  return (
    <div className="group-card">
      <div className="group__content">
        <img src={Images.circleImage} alt="Image1" />
        <h2>Группы</h2>
      </div>
      <hr className="group-hr" />
      <div className="group__content--wrapper">
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
<<<<<<< HEAD
          <button className="group__card--card-button">Tekshirish</button>
=======
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/homeworks">Проверять</Link>
          </button>
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
<<<<<<< HEAD
          <button className="group__card--card-button">Tekshirish</button>
=======
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/homeworks">Проверять</Link>
          </button>
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
<<<<<<< HEAD
          <button className="group__card--card-button">Tekshirish</button>
=======
          <button className="group__card--card-button">
            {" "}
            <Link to="/home/homeworks">Проверять</Link>
          </button>
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd
        </div>
        <div className="group__card--card">
          <div className="group__card--card-content">
            <img src={Images.reactImage} alt="Image1" />
            <h3>FRONT-001</h3>
            <p>Sunnatbek Yusupov</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Talabalar</h3>
            <p>9</p>
          </div>
          <div className="group__card--card-wrapper">
            <h3>Vaqt</h3>
            <p>17:00</p>
          </div>
<<<<<<< HEAD
          <button className="group__card--card-button">Tekshirish</button>
=======
          <button className="group__card--card-button">
            <Link to="/home/homeworks">Проверять</Link>
          </button>
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
