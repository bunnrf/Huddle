const MeetingsMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    default:
      return next(action);
  }
};

export default MeetingsMiddleware;
