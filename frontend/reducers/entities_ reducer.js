import {combineReducers} from 'redux';
import usersReducer from './user_reducer';
import campsitesReducer from './campsites_reducer';
import campsitePhotosReducer from './campsite_photos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  campsites: campsitesReducer,
  campsitePhotos: campsitePhotosReducer
});

export default entitiesReducer;