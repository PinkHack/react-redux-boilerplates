import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const signupService = {
  signup
};

export function signup(data) {
  const url = BASE_URL + '/signup';
  return axios.post(url, data);
}
