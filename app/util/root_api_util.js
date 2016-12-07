const API_URL = 'http://10.0.3.2:3000/api/';

const apiRequest = async (url, method, payload) => {
  let options = {
    method,
    body: null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth': 'iveemf_secret',
    },
  };
  if (payload) options = { ...options, body: JSON.stringify(payload) };
  const response = await fetch(`${API_URL}${url}`, options);
  return await response.json();
};

export const getRequest = async (url) => apiRequest(url, 'GET');
export const postRequest = async (url, payload) => apiRequest(url, 'POST', payload);
