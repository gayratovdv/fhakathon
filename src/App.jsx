import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GroupsPage from './pages/Groups/group';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/home/groups" element={<GroupsPage />} />
    </Routes>
    </>
  )
}

export default App
