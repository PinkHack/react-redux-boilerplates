import { signupConstants } from './../constants';

const initialState = {
  isSignupSubmitting: false,
  isSignupSubmitted: false,
  isSignupSuccess: false,
  signupData: {},
  signupError: {
    email: [],
    abn: []
  }
};

export function signup(state = initialState, action) {
  switch (action.type) {
    case signupConstants.SIGNUP_REQUEST:
      return {
        ...state,
        isSignupSubmitting: true,
        isSignupSubmitted: false,
        signupData: action.data,
        signupError: {}
      };
    case signupConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSubmitting: false,
        isSignupSubmitted: true,
        isSignupSuccess: true,
        signupData: action.data
      };
    case signupConstants.SIGNUP_FAILURE:
      return {
        ...state,
        isSignupSubmitting: false,
        isSignupSubmitted: true,
        isSignupSuccess: false,
        signupError: action.error
      };
    default:
      return state;
  }
}
