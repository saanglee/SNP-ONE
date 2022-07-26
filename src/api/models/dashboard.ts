import { apiRequest } from "../instance/instance";
import { Applicant, ApplicantList } from "../../types/datshboard";

export const getApplicantData = async () =>
  await apiRequest.get<ApplicantList>("/users");

export const patchIsApplicantChecked = async ({ id, isChecked }: Applicant) =>
  await apiRequest.patch("/users", id, {
    isChecked: !isChecked,
  });
