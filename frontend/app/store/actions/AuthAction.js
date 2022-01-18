import {SET_LOGIN_AUTH, SET_LOGOUT_AUTH, UPDATE_USER_INFO} from '../constants';

export const _login = (authToken, oauth, initialRoute) => async dispatch => {
  dispatch({type: SET_LOGIN_AUTH, payload: {authToken, oauth, initialRoute}});
};

// INIT Logged In user info
export const _initUserInfo = data => async dispatch => {
  dispatch({type: UPDATE_USER_INFO, payload: {data}});
};

export const _logout = () => async dispatch => {
  dispatch({type: SET_LOGOUT_AUTH, payload: {}});
};
