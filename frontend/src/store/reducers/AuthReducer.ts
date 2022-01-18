import {RouteNames} from '@config/routes';
import {UPDATE_USER_INFO} from '../constants';

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
    default:
      return state;
  }
}
