import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/register";
import Privite_route from "./components/Register/privite_route";
import Navbar from "./components/navbar/Navbar";

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
      </Routes>
    </>
  );
};

export default App;
