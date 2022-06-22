import React from 'react';
import { useSelector } from 'react-redux';

import AuthButtonGroup from '../AuthButtonGroup/AuthButtonGroup';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="headerContent">
      {isLoggedIn ? <Logout /> : <AuthButtonGroup />}
    </div>
  );
}
export default Header;
