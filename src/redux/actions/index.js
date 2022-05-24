import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const gotNews = (payload) => ({
  type: actionTypes.NEWS_RECEIVED,
  payload,
});

export const getRejected = (error) => ({
  type: actionTypes.NEWS_FAILED,
  error,
});

export const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});

export const changeModalType = (payload) => ({
  type: actionTypes.CHANGE_MODAL_TYPE,
  payload,
});

export const sendAuth = (payload) => ({
  type: actionTypes.AUTH_REQUESTED,
  payload,
});

export const gotAuth = (payload) => ({
  type: actionTypes.AUTH_RECEIVED,
  payload,
});

export const rejectedAuth = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error,
});

export const sendLogin = (payload) => ({
  type: actionTypes.LOGIN_REQUESTED,
  payload,
});

export const gotLogin = (payload) => ({
  type: actionTypes.LOGIN_RECEIVED,
  payload,
});

export const rejectedLogin = (error) => ({
  type: actionTypes.LOGIN_FAILED,
  error,
});

export const logoutClose = () => ({
  type: actionTypes.LOGOUT,
});

export const getUserNews = (payload) => ({
  type: actionTypes.USER_NEWS_REQUESTED,
  payload,
});

export const gotUserNews = (payload) => ({
  type: actionTypes.USER_NEWS_RECEIVED,
  payload,
});

export const getUserNewsRejected = (error) => ({
  type: actionTypes.USER_NEWS_FAILED,
  error,
});

export const isUserPageOpen = (payload) => ({
  type: actionTypes.USER_NEWS_FAILED,
  payload,
});

export const isAuthorPageOpen = (payload) => ({
  type: actionTypes.AUTHOR_NEWS_REQUESTED,
  payload,
});
