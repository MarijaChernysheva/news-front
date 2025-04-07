import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { sendAuth, sendLogin } from '../../redux/actions';

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function AuthForm() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.auth.modalType);
  const error = useSelector((state) => state.auth.error);

  const isSignup = modalType === 'signup';
  const [errorText, setErrorText] = useState('');

  useEffect(() => { setErrorText(error); }, [error]);

  const handleSubmit = (values) => {
    const currentAction = isSignup
      ? sendAuth(values)
      : sendLogin(values);
    dispatch(currentAction);
  };

  const onKeyUp = () => {
    setErrorText('');
  };

  return (
    <>
      <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>
      {errorText && <p style={{ color: 'red' }}>{errorText}</p>}
      <Formik
        initialValues={{
          login: '',
          password: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        data-testid="authForm"
      >
        <Form>

          {isSignup && (
          <Field
            id="login"
            name="login"
            placeholder="login"
            onKeyUp={onKeyUp}
          />
          )}

          <Field
            id="password"
            name="password"
            placeholder="password"
            onKeyUp={onKeyUp}
          />

          <Field
            onKeyUp={onKeyUp}
            id="email"
            name="email"
            placeholder="example@dunice.net"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AuthForm;
