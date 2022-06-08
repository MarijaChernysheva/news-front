import * as React from 'react';
import { useDispatch } from 'react-redux';
import { bool, string } from 'prop-types';

import Button from '@mui/material/Button';

import { toggleEditModal, toggleNewsModal } from '../../redux/actions';

import './UserData.css';

function UserData({
  email, name, avatar, isMyPage,
}) {
  const photo = avatar?.slice(6);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleEditModal(true));
  };

  const onClickNews = () => {
    dispatch(toggleNewsModal(true));
  };

  return (
    <div className="userData">
      {isMyPage && <Button variant="contained" onClick={onClickNews}>Add news</Button>}
      <span className="userText">{ name }</span>
      <img className="imagePrifile" alt="avatar" src={`${process.env.REACT_APP_API_URL}/${photo}`} />
      <span className="userText">
        { email }
      </span>
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
