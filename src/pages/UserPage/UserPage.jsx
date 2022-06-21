import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Card, Spinner, Alert } from '../../components';
import UserData from '../../components/UserData/UserData';

import { getUser } from '../../redux/actions';

import './UserPage.css';

function UserPosts() {
  const dispatch = useDispatch();
  const params = useParams();
  const { id: userId } = params;
  const token = localStorage.getItem('token');

  const isMyPage = useMemo(() => userId === 'profile', [userId]);

  useEffect(() => {
    if (token) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId, token]);

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
    <>
      <div className="userPageText">User page</div>
      <div className="userPage">
        <UserData
          email={user?.email}
          name={user?.login}
          avatar={user?.avatar}
          isMyPage={isMyPage}
        />

        {user?.news?.map(({
          image, id, title, text,
        }) => (
          <Card
            file={image}
            key={id}
            title={title}
            text={text}
          />
        ))
        || <Alert severity="success" text="NO NEWS" />}
      </div>

    </>
  );
}

export default UserPosts;
