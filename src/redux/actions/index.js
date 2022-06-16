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

export const getUser = (payload) => ({
  type: actionTypes.USER_REQUESTED,
  payload,
});

export const gotUser = (payload) => ({
  type: actionTypes.USER_RECEIVED,
  payload,
});

export const rejectedUserNews = (error) => ({
  type: actionTypes.USER_FAILED,
  error,
});

export const toggleEditModal = (payload) => ({
  type: actionTypes.TOGGLE_EDIT_MODAL,
  payload,
});

export const toggleNewsModal = (payload) => ({
  type: actionTypes.TOGGLE_NEWS_MODAL,
  payload,
});

export const changeUser = (payload, file) => ({
  type: actionTypes.EDIT_USER_REQUESTED,
  payload,
  file,
});

export const updateUser = (payload) => ({
  type: actionTypes.EDIT_USER_RECEIVED,
  payload,
});

export const rejectedUser = (payload) => ({
  type: actionTypes.EDIT_USER_FAILED,
  payload,
});

export const addUserNews = (payload) => ({
  type: actionTypes.USER_NEWS_REQUESTED,
  payload,
});
