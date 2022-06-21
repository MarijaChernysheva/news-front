import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { logoutClose } from '../../redux/actions';

import './Logout.css';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    localStorage.removeItem('token');
    dispatch(logoutClose());
    navigate('/');
  };

  const onClickAvatar = () => {
    navigate('users/profile');
  };
  return (
    <Stack className="logoutContent" direction="row" spacing={2}>
      <Avatar className="avatar" sx={{ bgcolor: grey[500] }} onClick={onClickAvatar} src="/broken-image.jpg" />
      <Button variant="contained" onClick={onClick}>LOG OUT</Button>
    </Stack>
  );
}

export default Logout;
