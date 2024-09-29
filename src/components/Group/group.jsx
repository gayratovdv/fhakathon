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
    </div>
  );
};

export default GroupCard;
