import { apiRequest } from '../api/instance/instance';
import { Applicant, Applicants } from '../types/dashboard';
import { axiosInstance } from './index';

export const getApplicants = async () =>
  await apiRequest.get<Applicants>('/users');

export const patchIsApplicantChecked = async ({ id, isChecked }: Applicant) =>
  await apiRequest.patch('/users', id, {
    isChecked: !isChecked,
  });

// export const getAll = async (): Promise<Applicant[]> => {
//   const { data } = await axiosInstance.get('/users');
//   return data;
// };

// export const updateIsChecked = async ({
//   id,
//   isChecked,
// }: Applicant): Promise<Applicant[]> => {
//   const { data } = await axiosInstance.patch('/users', id, {
//     isChecked: !isChecked,
//   });
// };
