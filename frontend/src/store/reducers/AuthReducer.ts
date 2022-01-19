import {RouteNames} from '@config/routes';
import {SET_LOGIN_AUTH, SET_LOGOUT_AUTH, UPDATE_USER_INFO} from '../constants';

const initialSate = {
  authToken: '',
  userInfo: {},
  initialRoute: RouteNames.WELCOME,
};

export default function (state = initialSate, action: any) {
  const {type, payload} = action;

  switch (type) {
    case UPDATE_USER_INFO: {
      return {
        ...state,
        userInfo: payload.data,
      };
    }
    case SET_LOGIN_AUTH: {
      return {
        ...state,
        ...payload,
      };
    }
    case SET_LOGOUT_AUTH: {
      return {
        ...state,
        authToken: '',
        initialRoute: RouteNames.WELCOME,
      };
    }
    default:
      return state;
  }
}
