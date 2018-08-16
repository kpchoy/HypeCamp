import {merege} from 'lodash';
import {RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKING:
      return merege({}, state, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      const newState = merege({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};