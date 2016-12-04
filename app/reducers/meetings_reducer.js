import merge from 'lodash/merge';

const defaultState = {
  meetings: {}
}

const MeetingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default MeetingsReducer;
