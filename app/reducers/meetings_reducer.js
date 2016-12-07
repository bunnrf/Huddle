import { MeetingsConstants, MeetingsActions } from '../actions/meetings_actions';
import merge from 'lodash/merge';

const defaultState = [];

const MeetingsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (MeetingsConstants.RECEIVE_MEETINGS):
      console.log(action.meetings);
      return action.meetings;
    default:
      return state;
  }
}

export default MeetingsReducer;
