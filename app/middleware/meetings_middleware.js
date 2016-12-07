import { MeetingsConstants, MeetingsActions } from '../actions/meetings_actions';
import { fetchMeetings, createMeeting } from '../util/meetings_api_util';

const MeetingsMiddleware = ({ dispatch }) => next => action => {
  let success;
  let errors;

  switch(action.type) {
    case (MeetingsConstants.REQUEST_MEETINGS):
      success = (meetings) => dispatch(MeetingsActions.receiveMeetings(meetings));
      fetchMeetings(success);
      return next(action);
    default:
      return next(action);
  }
};

export default MeetingsMiddleware;
