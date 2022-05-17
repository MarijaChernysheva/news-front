import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './AuthButtonGroup.css';
import { changeModalType, toggleModal } from '../../redux/actions';

function AuthButtonGroup() {
  const dispatch = useDispatch();

  const handlerClick = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModalType(type));
  };

  return (
    <div className="authorizationContent">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => handlerClick('login')}>LOG IN</Button>
        <Button onClick={() => handlerClick('signup')}>SIGN UP</Button>
      </ButtonGroup>
    </div>
  );
}

export default AuthButtonGroup;
