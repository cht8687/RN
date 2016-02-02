'use strict'

import createReducer from '../utils/createReducer';
import { 
  FETCH_NEWS 
} from '../constant/ActionType';

import { Record } from 'immutable';

class State extends Record({
	newsData: null

}){

}

const actionHandler = {
  [FETCH_NEWS](state, action) {
    const { data } = action;
    return state.set('newsData', data);
  }
}

export default createReducer(new State(), actionHandler);
