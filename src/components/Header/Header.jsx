import React from 'react';
import { useSelector } from 'react-redux';

import AuthButtonGroup from '../AuthButtonGroup/AuthButtonGroup';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);

  return (
    <div className="headerContent">
      <p>All news</p>
      {isUserLogin ? <Logout /> : <AuthButtonGroup />}
    </div>
  );
}

export default Header;
