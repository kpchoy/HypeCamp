import {RECEIVE_CAMPSITES, RECEIVE_CAMPSITE} from '../actions/campsite_actions';
import {merge} from 'lodash';

export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAMPSITES:
      return merge({}, action.campsites);
    case RECEIVE_CAMPSITE:
      return action.payload.campsite;     
    default:
      return oldState;
  }
};


