import { combineReducers } from 'redux';
import messageReducer from './message';
import todoReducer from './todo';
import formReducer from './form';

const rootReducer = combineReducers({
  messageReducer,
  todoReducer,
  formReducer,
});

export default rootReducer;