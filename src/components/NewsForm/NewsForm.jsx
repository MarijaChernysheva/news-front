import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Button from '@mui/material/Button';

import { addUserNews } from '../../redux/actions';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  tag: Yup.string()
    .min(2, 'Too Short!'),
});

function NewsForm() {
  const dispatch = useDispatch();

  const [file, setImage] = useState();

  const handleSubmitNews = (values) => {
    dispatch(addUserNews(values, file));
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Formik
      initialValues={{
        file: '',
        title: '',
        text: '',
        tag: '',
      }}
      validationSchema={SignupSchema}
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
        <input
          variant="contained"
          type="file"
          accept="image/*"
          onChange={uploadImage}
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
