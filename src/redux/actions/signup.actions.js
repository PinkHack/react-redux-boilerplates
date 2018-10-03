import { signupService } from './../../utils';
import { signupConstants } from '../constants';

export const signupActions = {
  signup
};

function signup(data) {
  return dispatch => {
    dispatch(request({ data }));
    signupService
      .signup(data)
      .then(res => {
        const resData = res.data.data;
        dispatch(success(resData));
      })
      .catch(error => {
        dispatch(failure(error.response.data.errors));
      });
  };

  function request(data) {
    return { type: signupConstants.SIGNUP_REQUEST, data };
  }
  function success(data) {
    return { type: signupConstants.SIGNUP_SUCCESS, data };
  }
  function failure(error) {
    return { type: signupConstants.SIGNUP_FAILURE, error };
  }
}
