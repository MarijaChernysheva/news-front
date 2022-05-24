import * as React from 'react';
import { bool, string } from 'prop-types';

import Button from '@mui/material/Button';

import './UserData.css';

function UserData({ email, name, isMyPage }) {
  return (
    <div className="userData">
      {isMyPage && <Button variant="contained">Add news</Button>}
      <p className="userText">{ name }</p>
      <p className="userText">
        {' '}
        { email }
      </p>

      {isMyPage && <Button variant="contained">Edit profile</Button>}
    </div>
  );
}

UserData.propTypes = {
  email: string,
  name: string,
  isMyPage: bool,
};

UserData.defaultProps = {
  email: '',
  name: '',
  isMyPage: false,
};

export default UserData;
