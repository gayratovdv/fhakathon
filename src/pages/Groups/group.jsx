import React from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import GroupCard from "../../components/Group/group";
import "./groups.css";

const GroupsPage = () => {
  return (
    <div>
      <div className="main-content">
        <Sidebar />
        <GroupCard />
      </div>
    </div>
  );
};

export default GroupsPage;
