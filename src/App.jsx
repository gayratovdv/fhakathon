import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/register";
import Privite_route from "./components/Register/privite_route";
import Navbar from "./components/navbar/navbar";
import GroupsPage from "./pages/Groups/group";
import Homework from "./components/Homework/Homework";
<<<<<<< HEAD
import StudentCard from "./pages/Students/students";
import NotFoundPage from './pages/NotFound/notfound';
=======
import Sidebar from "./components/Sidebar/sidebar";
import styled from "styled-components";

// Styled Component
const Center = styled.div`
  display: flex;
  align-items: stretch; /* Vertical alignment */
  justify-content: space-between;
`;
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
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
<<<<<<< HEAD
            </Privite_route>
          }
        />
        <Route
          path="/home/students"
          element={
            <Privite_route isAuthenticated={isAuthenticated}>
              <Navbar />

              <StudentCard />
            </Privite_route>
          }
        />
        <Route
          path="/*"
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </>
=======
            </Center>
          </Privite_route>
        }
      />
    </Routes>
>>>>>>> db3781506288785f3f5098656a8e9df163d5e0fd
  );
};

export default App;
