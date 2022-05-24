import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Alert from '../../components/Alert/Alert';

import './MainPage.css';

import { getNews } from '../../redux/actions';

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
      {news.length > 0 && news.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          text={post.text}
          author={post.user}
        />
      ))}
      {news.length <= 0 && <Alert severity="success" text="NO NEWS" />}
    </div>
  );
}

export default Posts;
