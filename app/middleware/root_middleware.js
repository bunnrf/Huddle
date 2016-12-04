import { applyMiddleware } from 'redux';
import MeetingsMiddleware from './meetings_middleware';

const RootMiddleware = applyMiddleware(
  MeetingsMiddleware
);

export default RootMiddleware;
