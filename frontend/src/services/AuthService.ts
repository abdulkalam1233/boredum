import environment from '@environment/environment';
import {AxiosCall} from '@utils/axios';

export const loginUser = async (payload: {email: string; password: string}) => {
  return AxiosCall.post(`${environment.base_api_url}/auth/login`, payload);
};

export const signUpUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  return AxiosCall.post(`${environment.base_api_url}/auth/sign-up`, payload);
};
