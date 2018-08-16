import {merge} from 'lodash';
import {RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKINGS} from '../actions/booking_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, action.payload.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      const newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};