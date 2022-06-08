import * as React from 'react';
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

  const handleSubmit = (values) => {
    dispatch(addUserNews(values));
  };

  return (
    <Formik
      initialValues={{
        title: '',
        text: '',
        tag: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
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
