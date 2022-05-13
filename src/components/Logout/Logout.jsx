import React from 'react';
import { useDispatch } from 'react-redux';

import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PageviewIcon from '@mui/icons-material/Pageview';
import Button from '@mui/material/Button';

import { logoutClose } from '../../redux/actions';

import './Logout.css';

function Logout() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logoutClose());
    localStorage.removeItem('token');
  };

  return (
    <Stack className="logoutContent" direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: grey[500] }}>
        <PageviewIcon />
      </Avatar>
      <Button variant="contained" onClick={onClick}>LOG OUT</Button>
    </Stack>
  );
}

export default Logout;
