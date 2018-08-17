import {RECEIVE_REVIEW, RECEIVE_CAMPSITE} from '../actions/campsite_actions';
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
     
    case RECEIVE_CAMPSITE: 
      return merge({}, action.payload.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    default:
      return state;
  }
};