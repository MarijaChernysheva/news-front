import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AuthButtonGroup from '../AuthButtonGroup/AuthButtonGroup';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const onClickAllnews = () => navigate('/');

  return (
    <div className="headerContent">
      <button type="button" className="buttonMainPage" onClick={onClickAllnews}>All news</button>
      {isLoggedIn ? <Logout /> : <AuthButtonGroup />}
    </div>
  );
}
export default Header;
