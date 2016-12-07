import { getRequest, postRequest } from './root_api_util';

export const fetchMeetings = async (success) => {
  const response = await getRequest('meetings.json');
  success(response);
}

export const createMeeting = async(payload, success) => {
  return await postRequest('meetings.json', { meeting: payload });
}
