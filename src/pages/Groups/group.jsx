import React from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import GroupCard from "../../components/Group/group";
import "./groups.css";

const GroupsPage = () => {
  return (
    <div style={{ width: "90%" }}>
      <div className="main-content">
        <GroupCard />
      </div>
    </div>
  );
};

export default GroupsPage;
