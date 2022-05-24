import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AuthButtonGroup from '../AuthButtonGroup/AuthButtonGroup';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);
  const navigate = useNavigate();

  return (
    <div className="headerContent">
      <button type="button" className="buttonMainPage" onClick={() => navigate('/')}>All news</button>
      {isUserLogin ? <Logout /> : <AuthButtonGroup />}
    </div>
  );
}

export default Header;
