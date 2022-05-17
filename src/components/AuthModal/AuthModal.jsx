import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import AuthForm from '../AuthForm/AuthForm';
import { toggleModal } from '../../redux/actions';

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

function AuthModal() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.auth.modalIsOpen);

  const handleClose = () => dispatch(toggleModal(false));

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AuthForm />
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;
