import * as React from 'react';
import { useDispatch } from 'react-redux';
import { bool, string } from 'prop-types';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { toggleEditModal } from '../../redux/actions';

import './UserData.css';

function UserData({
  email, name, avatar, isMyPage,
}) {
  const foto = avatar?.slice(6);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleEditModal(true));
  };
  console.log(avatar);

  return (
    <div className="userData">
      {isMyPage && <Button variant="contained">Add news</Button>}
      <p className="userText">{ name }</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:3000/${foto}`}
          alt="avatar"
        />
      </Card>
      <p className="userText">
        { email }
      </p>

      {isMyPage && <Button variant="contained" onClick={onClick}>Edit profile</Button>}
    </div>
  );
}

UserData.propTypes = {
  email: string,
  name: string,
  avatar: string,
  isMyPage: bool,
};

UserData.defaultProps = {
  email: '',
  name: '',
  avatar: '',
  isMyPage: false,
};

export default UserData;
