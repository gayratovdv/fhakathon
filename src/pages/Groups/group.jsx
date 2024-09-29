import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import GroupCard from "../../components/Group/group";
import "./groups.css";

const GroupsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <GroupCard />
      </div>
    </div>
  );
};

export default GroupsPage;
