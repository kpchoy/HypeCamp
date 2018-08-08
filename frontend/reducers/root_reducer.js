import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_ reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});
