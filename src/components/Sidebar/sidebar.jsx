import React from "react";
import "./sidebar.css";
import Images from "../../utils/images";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="active">
          <img src={Images.groupImage} alt="Image1" />
          Панель Приборов
        </li>
        <li>
          <img src={Images.salaryImage} alt="Image1" />
          Salary</li>
      </ul>
    </div>
  );
};

export default Sidebar;
