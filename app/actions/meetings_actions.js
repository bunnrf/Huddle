export const MeetingsConstants = {
  REQUEST_MEETINGS: 'REQUEST_MEETINGS',
  RECEIVE_MEETINGS: 'RECEIVE_MEETINGS',
}

export const MeetingsActions = {
  requestMeetings: () => ({
    type: MeetingsConstants.REQUEST_MEETINGS,
  }),

  receiveMeetings: meetings => ({
    type: MeetingsConstants.RECEIVE_MEETINGS,
    meetings,
  }),
}
