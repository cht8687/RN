'use strict'

import { combineReducers } from 'redux';
import { default as tab } from './tab';
import { default as news } from './news';

const reducers = combineReducers({
  tab
});

export default reducers;
