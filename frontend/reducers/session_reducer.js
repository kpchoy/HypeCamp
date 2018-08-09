import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  console.log(RECEIVE_CURRENT_USER);
  console.log(merge);
  console.log(RECEIVE_CURRENT_USER === action.type);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return  {test: 'test'};
      // return  merge({}, _nullUser, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer; 