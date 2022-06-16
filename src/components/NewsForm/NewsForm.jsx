import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import { addUserNews } from '../../redux/actions';

function NewsForm() {
  const dispatch = useDispatch();

  const handleSubmitNews = (values) => {
    localStorage.getItem('token');
    dispatch(addUserNews(values));
  };

  return (
    <Formik
      initialValues={{
        title: '',
        text: '',
        tag: '',
      }}
      onSubmit={handleSubmitNews}
    >
      <Form className="newsForm">
        <span className="userText">News editing</span>
        <Field
          id="title"
          name="title"
          placeholder="title"
        />
        <Field
          id="text"
          name="text"
          placeholder="text"
        />

        <Field
          id="tag"
          name="tag"
          placeholder="tag"
        />
        <Button
          variant="contained"
          type="submit"
        >
          Submit
        </Button>

      </Form>
    </Formik>
  );
}

export default NewsForm;
