import { useState } from 'react';
import { apiRequest } from '../instance/instance';

export const createApplicant = async (data: any) => {
  // TODO: any 수정
  const response: void | any = await apiRequest.post('/users', data);
  return response;
};
