import React from 'react';
import { useSelector } from 'react-redux';

import Authorization from '../Authorization/Authorization';
import Logout from '../Logout/Logout';

import './Header.css';

function Header() {
  const userIsLogin = useSelector((state) => state.auth.userIsLogin);

  return (
    <div className="headerContent">
      <p>All news</p>
      {userIsLogin ? <Logout /> : <Authorization />}
    </div>
  );
}

export default Header;
