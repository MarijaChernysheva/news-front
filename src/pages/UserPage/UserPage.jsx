import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Alert from '../../components/Alert/Alert';
import UserData from '../../components/UserData/UserData';

import { getUser } from '../../redux/actions';

import './UserPage.css';

function UserPosts() {
  const dispatch = useDispatch();
  const params = useParams();

  const isMyPage = useMemo(() => params.id === 'profile', [params.id]);

  useEffect(() => {
    dispatch(getUser(params.id));
  }, [dispatch, params, isMyPage]);

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
      {user?.news?.length
        ? user.news.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            text={post.text}
          />
        ))
        : <Alert severity="success" text="NO NEWS" />}
    </div>
  );
}

export default UserPosts;
