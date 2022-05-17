import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/Header/Header';
import AuthModal from './components/AuthModal/AuthModal';

import './App.css';

function App() {
  const modalIsOpen = useSelector((state) => state.auth.modalIsOpen);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
      {modalIsOpen && <AuthModal />}
    </BrowserRouter>
  );
}

export default App;
