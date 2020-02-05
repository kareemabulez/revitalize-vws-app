/* THIRD PARTY IMPORTS */
import { combineReducers } from 'redux';
/* LOCAL IMPORTS */
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
});

export default rootReducer;
