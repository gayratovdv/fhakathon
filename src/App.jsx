import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Privite_route from "./components/Register/Privite_route";
import Navbar from "./components/navbar/Navbar";
import GroupsPage from "./pages/Groups/group";
import Homework from "./components/Homework/Homework";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/home"
          element={
            <Privite_route isAuthenticated={isAuthenticated}>
              <Navbar />
            </Privite_route>
          }
        />
        <Route
          path="/home/groups"
          element={
            <Privite_route isAuthenticated={isAuthenticated}>
              <GroupsPage />
            </Privite_route>
          }
        />
        <Route
          path="/home/homeworks"
          element={
            <Privite_route isAuthenticated={isAuthenticated}>
              <Homework />
            </Privite_route>
          }
        />
      </Routes>
    </>
  );
};

export default App;
