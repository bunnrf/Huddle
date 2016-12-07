import { combineReducers } from 'redux';
import MeetingsReducer from './meetings_reducer';

const RootReducer = combineReducers({
  meetings: MeetingsReducer
});

export default RootReducer;
