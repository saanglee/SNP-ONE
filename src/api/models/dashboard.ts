import { apiRequest } from "../instance/instance";
import { Applicant } from "../../types/datshboard";

export const getApplicantData = async () =>
  await apiRequest.get<Applicant[]>("/user");

export const patchIsApplicantChecked = async ({ id, isChecked }: Applicant) =>
  await apiRequest.patch("/user", id, {
    isChecked: !isChecked,
  });
