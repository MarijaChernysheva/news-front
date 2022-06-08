import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/Header/Header';
import AuthModal from './components/AuthModal/AuthModal';
import EditModal from './components/EditModal/EditModal';
import NewsModal from './components/NewsModal/NewsModal';

import './App.css';

function App() {
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const isEditModalOpen = useSelector((state) => state.user.isEditModalOpen);
  const isNewsModalOpen = useSelector((state) => state.news.isNewsModalOpen);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
      {isModalOpen && <AuthModal />}
      {isEditModalOpen && <EditModal />}
      {isNewsModalOpen && <NewsModal />}
    </BrowserRouter>
  );
}

export default App;
