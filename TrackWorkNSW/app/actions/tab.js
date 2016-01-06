'use strict'

import { 
  CHANGE_TAB 
} from '../constant/ActionType';

/**
 * Switch tab
 */
export function changeTab (tab) {
  return (dispatch) => {
    return Promise.resolve(dispatch({
      type: CHANGE_TAB,
      data: tab
    }))
  }
}
