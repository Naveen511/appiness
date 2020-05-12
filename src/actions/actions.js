export const LOGIN_USER = 'LOGIN_USER';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const loginUser = (username) => {
  return {
    type: LOGIN_USER
  }
};