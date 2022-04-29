import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
