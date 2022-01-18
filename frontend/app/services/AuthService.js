import environment from '../environment/environment';
import {AxiosCall} from '../utils/axios';

export const loginUser = ({email, password}) => {
  return AxiosCall.post(`${environment.base_api_url}/login`, {
    email,
    password,
  });
};

export const signUpUser = ({name, email, password}) => {
  return AxiosCall.post(`${environment.base_api_url}/sign-up`, {
    name,
    email,
    password,
  });
};
