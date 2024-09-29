import React from "react";
import { NavLink } from "react-router-dom"; // NavLink qo'shildi
import styled from "styled-components";

// Styled Components
const SidebarContainer = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #130450; /* Ko‘k rang */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3); /* Soyali effekt */
`;

const SidebarItem = styled(NavLink)`
  /* NavLink o'rnatildi */
  text-decoration: none;
  width: 100%;
  padding: 20px 0; /* Paddingni oshirdik */
  text-align: center;
  color: #ffffff; /* Oq rang */
  font-size: 18px; /* Font o'lchamini oshirdik */
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s; /* Yumoq o'zgarish */

  &:hover {
    background-color: blue; /* Hover rang */
  }

  &.active {
    background-color: blue; /* Faol bo'lsa rang */
  }
`;

const SidebarIcon = styled.div`
  font-size: 28px; /* Ikonalar o'lchamini oshirdik */
  margin-bottom: 5px;
`;

// Main Sidebar Component
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem to="/home/students" activeClassName="active">
        <SidebarIcon>💰</SidebarIcon>
        Koinlar
      </SidebarItem>
      <SidebarItem to="/home/homeworks" activeClassName="active">
        <SidebarIcon>📁</SidebarIcon>
        Proyektlar
      </SidebarItem>
      <SidebarItem to="/*" activeClassName="active">
        <SidebarIcon>📝</SidebarIcon>
        Metatalogiya
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
