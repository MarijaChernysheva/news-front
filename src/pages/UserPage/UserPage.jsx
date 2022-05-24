import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Alert from '../../components/Alert/Alert';
import UserData from '../../components/UserData/UserData';

import './UserPage.css';
import { getUserNews, isAuthorPageOpen } from '../../redux/actions';

function PostsUserNews() {
  const dispatch = useDispatch();
  const params = useParams();

  const isMyPage = params.id === 'my';

  useEffect(() => {
    const currentAction = isMyPage
      ? isAuthorPageOpen()
      : getUserNews(params.id);
    dispatch(currentAction);
  }, [dispatch, params]);

  const {
    user,
    isLoading,
    error,
  } = useSelector((state) => state.user);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert severity="error" text={error} />;
  }

  return (
    <div className="userPage">
      <UserData email={user.email} name={user.login} isMyPage={isMyPage} />
      {user?.news?.length > 0 && user.news.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          text={post.text}
        />
      ))}
      {user?.news?.length === 0 && <Alert severity="success" text="NO NEWS" />}
    </div>
  );
}

export default PostsUserNews;
