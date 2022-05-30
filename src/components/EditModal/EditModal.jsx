import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { toggleEditModal, changeUser } from '../../redux/actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  const uploadAvatar = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  };

  return (
    <Modal
      open={isEditModalOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        <p className="userText">Profile editing</p>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            value={login}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={uploadAvatar}
          />
          <button
            type="submit"
            disabled={!login}
          >
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default EditModal;
