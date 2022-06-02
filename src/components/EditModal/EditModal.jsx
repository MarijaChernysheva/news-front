import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './EditModal.css';
import { toggleEditModal, changeUser } from '../../redux/actions';

function EditModal() {
  const dispatch = useDispatch();
  const { isEditModalOpen, user } = useSelector((state) => state.user);
  const [login, setLogin] = useState(user?.login);
  const [avatar, setAvatar] = useState();

  const handleSubmit = () => {
    dispatch(changeUser(login, avatar));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      email: '',
    },

    onSubmit: handleSubmit,
  });

  const handleClose = () => dispatch(toggleEditModal(false));

  const handleChange = (e) => {
    setLogin(e.target.value);
  };

  const uploadAvatar = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  return (
    <Modal
      open={isEditModalOpen}
      onClose={handleClose}
    >
      <Box className="boxEditModal">
        <div className="aaa">
          <span className="userText">Profile editing</span>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              value={login}
              onChange={handleChange}
            />
            <input
              variant="contained"
              type="file"
              accept="image/*"
              onChange={uploadAvatar}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!login}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default EditModal;
