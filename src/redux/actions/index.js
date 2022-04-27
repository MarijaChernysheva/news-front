import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const gotNews = (payload) => ({
  type: actionTypes.NEWS_RECEIVED,
  payload,
});

export const getRejected = () => ({
  type: actionTypes.NEWS_FAILED,
});
