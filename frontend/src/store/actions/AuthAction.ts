import {SET_LOGIN_AUTH, SET_LOGOUT_AUTH, UPDATE_USER_INFO} from '../constants';

export const _login =
  (authToken: string, oauth: any, initialRoute: string) =>
  async (dispatch: any) => {
    dispatch({type: SET_LOGIN_AUTH, payload: {authToken, oauth, initialRoute}});
  };

// INIT Logged In user info
export const _initUserInfo = (data: any) => async (dispatch: any) => {
  dispatch({type: UPDATE_USER_INFO, payload: {data}});
};

export const _logout = () => async (dispatch: any) => {
  dispatch({type: SET_LOGOUT_AUTH, payload: {}});
};
