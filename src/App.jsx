import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/register";
import Privite_route from "./components/Register/privite_route";
import Navbar from "./components/navbar/navbar";
import GroupsPage from "./pages/Groups/group";
import Homework from "./components/Homework/Homework";
import StudentCard from "./pages/Students/students";
import NotFoundPage from './pages/NotFound/notfound';
import Sidebar from "./components/Sidebar/sidebar";
import styled from "styled-components";

// Styled Component
const Center = styled.div`
  display: flex;
  align-items: stretch; /* Vertical alignment */
  justify-content: space-between;
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/fhakathon"
        element={<Register setIsAuthenticated={setIsAuthenticated} />}
      />

      <Route
        path="/home"
        element={
          <Privite_route isAuthenticated={isAuthenticated}>
            <Navbar />
            <Center>
              <Sidebar />
              <GroupsPage />
            </Center>
          </Privite_route>
        }
      />
      <Route
        path="/home/homeworks"
        element={
          <Privite_route isAuthenticated={isAuthenticated}>
            <Navbar />
            <Center>
              <Sidebar />
              <Homework />
            </Center>
          </Privite_route>
        }
      />
      <Route
        path="/home/students"
        element={
          <Privite_route isAuthenticated={isAuthenticated}>
            <Navbar />
            <Center>
              <Sidebar />
              <StudentCard />
            </Center>
          </Privite_route>
        }
      />
      <Route
        path="/*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};

export default App;
