'use strict'

import { 
  FETCH_NEWS 
} from '../constant/ActionType';

import Api from '../api/api';

/**
 * fetch news
 */
export function fetchNews () {

  return (dispatch, getStore) => {

    const api = new Api();
    return api.getNews()
     .then(data => {
        return dispatch({
          type: FETCH_NEWS,
          data
        })
     })
  }
}
