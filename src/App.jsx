import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/blog' element={<h1>Blog</h1>} />
    </Routes>
    </>
  )
}

export default App
