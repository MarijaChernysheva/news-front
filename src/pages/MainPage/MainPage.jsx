import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Spinner, Alert } from '../../components';

import { getNews } from '../../redux/actions';

import './MainPage.css';

function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const {
    news,
    isLoading,
    error,
  } = useSelector((state) => state.news);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert severity="error" text={error} />;
  }

  return (
    <div className="mainPage">
      {news.length
        ? news.map(({
          id, title, text, user,
        }) => (
          <Card
            key={id}
            title={title}
            text={text}
            author={user}
          />
        ))
        : <Alert severity="success" text="NO NEWS" />}

    </div>
  );
}

export default Posts;
