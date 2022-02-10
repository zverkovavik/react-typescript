import React from 'react';
import './App.css';
import Cover from '../Cover/Cover';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/cover' element={<Cover />} />
      <Route path='/' element={<MainPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
