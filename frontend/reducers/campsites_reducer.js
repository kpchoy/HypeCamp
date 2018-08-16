import {RECEIVE_CAMPSITES, RECEIVE_CAMPSITE} from '../actions/campsite_actions';
import {merge} from 'lodash';
import {RECEIVE_BOOKINGS} from '../actions/booking_actions';

export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAMPSITES:
      return merge({}, action.campsites);
    case RECEIVE_CAMPSITE:
      return action.payload.campsite;     
    case RECEIVE_BOOKINGS:
      return action.payload.campsites;
    default:
      return oldState;
  }
};


