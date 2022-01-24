import environment from 'environment/environment';
import {AxiosCall} from 'utils/axios';

export const getProfileDetails = async () => {
  return AxiosCall.get(`${environment.base_api_url}/me/profile-details`);
};
