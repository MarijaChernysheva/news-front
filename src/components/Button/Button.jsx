import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { changeModal, toggleModal } from '../../redux/actions';

function BasicButtonGroup() {
  const dispatch = useDispatch();

  const handlerClick = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModal(type));
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => handlerClick('login')}>LOG IN</Button>
      <Button onClick={() => handlerClick('signup')}>SIGN UP</Button>
    </ButtonGroup>
  );
}

export default BasicButtonGroup;
