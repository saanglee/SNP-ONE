import { AxiosResponse } from "axios";

export const dateFormatSetting = (response: AxiosResponse | void) => {
  if (!response) return;

  const list = response.data;

  return list;
};
