import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Privite_route from "./components/Register/Privite_route";
import Navbar from "./components/navbar/Navbar";
import GroupsPage from "./pages/Groups/group";

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
              <GroupsPage />
            </Privite_route>
          }
        />
      </Routes>
    </>
  );
};

export default App;
