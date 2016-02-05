'use strict'

import createReducer from '../utils/createReducer';
import { 
  FETCH_NEWS 
} from '../constant/ActionType';

import { Record } from 'immutable';
import { newsParser } from '../utils/newsParser';

class State extends Record({
	newsData: []

}){

}

const actionHandler = {
  [FETCH_NEWS](state, action) {
    const { data } = action;

    let result = newsParser(data);

    return state.set('newsData', result);
  }
}

export default createReducer(new State(), actionHandler);
