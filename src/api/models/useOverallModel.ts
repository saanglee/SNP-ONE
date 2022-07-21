import { dateFormatSetting } from "../utils/utils";
import { useState } from "react";
import { apiRequest } from "../instance/instance";

import { OverallItems } from "../../types/overall";

export const useOverallModel = () => {
  const [reports, setReports] = useState<OverallItems[]>([]);

  const getReports = async () => {
    const response = await apiRequest.get("/overall");
    const formattedData = dateFormatSetting(response);
    setReports(formattedData);
    console.log("getReports: response ->", response);
  };

  const getWeeklyReport = async (startDate: string, endDate: string) => {
    const response = await apiRequest.get(
      "/overall",
      `date_gte=${startDate}&date_lte=${endDate}`,
    );
    setReports(dateFormatSetting(response));
  };

  return {
    reports,
    getReports,
    getWeeklyReport,
  };
};
