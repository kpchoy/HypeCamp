import { RECEIVE_CAMPSITE } from '../actions/campsite_actions';


export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAMPSITE:
      return action.payload.campsite_photos;     
    default:
      return oldState;
  }
};