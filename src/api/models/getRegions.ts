import { apiRequest } from '../instance/instance';

export const getRegions = async () => {
  const response: void | any = await apiRequest.get('/regions');
  return response;
};
