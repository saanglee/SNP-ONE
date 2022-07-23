import { dateFormatSetting } from "../utils/utils";
import { useState } from "react";
import { apiRequest } from "../instance/instance";

export const useCitysModel = () => {
  const getCitys = async () => {
    const response: void | any = await apiRequest.get("/city");
    return response;
  };

  return {
    getCitys,
  };
};
