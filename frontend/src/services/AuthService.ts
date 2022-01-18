import environment from '@environment/environment';
import {AxiosCall} from '@utils/axios';

export const loginUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return AxiosCall.post(`${environment.base_api_url}/login`, {
    email,
    password,
  });
};

export const signUpUser = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  return AxiosCall.post(`${environment.base_api_url}/sign-up`, {
    name,
    email,
    password,
  });
};
