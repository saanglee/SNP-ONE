import { apiRequest } from '../instance/instance';
import { Applicant, Applicants } from '../../types/dashboard';

export const getApplicantData = async () =>
  await apiRequest.get<Applicants>('/users');

export const patchIsApplicantChecked = async ({ id, isChecked }: Applicant) =>
  await apiRequest.patch('/users', id, {
    isChecked: !isChecked,
  });
