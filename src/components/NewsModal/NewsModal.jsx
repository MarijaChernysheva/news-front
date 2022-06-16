import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import NewsForm from '../NewsForm/NewsForm';

import { toggleNewsModal } from '../../redux/actions';

import './NewsModal.css';

function NewsModal() {
  localStorage.getItem('token');
  const isNewsModalOpen = useSelector((state) => state.news.isNewsModalOpen);

  const dispatch = useDispatch();
  const handleNewsClose = () => dispatch(toggleNewsModal(false));
  return (
    <Modal
      open={isNewsModalOpen}
      onClose={handleNewsClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="boxNewsModal">
        <NewsForm />
      </Box>
    </Modal>

  );
}
export default NewsModal;
