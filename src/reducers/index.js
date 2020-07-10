import { combineReducers } from 'redux';
import ButtonReducer from './ButtonReducer.reducer';
export default combineReducers({
  buttonReducer: ButtonReducer,
});
