import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AuthButtonGroup from '../AuthButtonGroup/AuthButtonGroup';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const isLoggedId = useSelector((state) => state.auth.isUserLogin);
  const navigate = useNavigate();

  return (
    <div className="headerContent">
      <button type="button" className="buttonMainPage" onClick={() => navigate('/')}>All news</button>
      {isLoggedId ? <Logout /> : <AuthButtonGroup />}
    </div>
  );
}
export default Header;
