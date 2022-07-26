import React, { useState, useEffect, ReactNode } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import PageNation from "../components/dashboard/PageNation";
import Animation from "../elements/Animations/Animation";

import { ApplicantList, Applicant } from "../types/datshboard";
import { applicantAllData, filteredApplicantData } from "../store/dashboard";
import { getApplicantData } from "../api/models/dashboard";

const dateOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const checkOptionList = [
  { value: "all", name: "전체" },
  { value: "checked", name: "당첨" },
  { value: "unchecked", name: "미당첨" },
];

const Dashboard = () => {
  const [applicants, setApplicants] = useRecoilState(applicantAllData);
  // TODO: filterApplicants로 갈아끼울 시
  // const setApplicants = useSetRecoilState(applicantAllData)로 변경할 예정 (applicants가 안쓰이므로)
  const [fetchLoading, setFetchLoading] = useState(false);
  const filterApplicants = useRecoilValue(filteredApplicantData);

  React.useEffect(() => {
    async function fetchAndSetApplicants() {
      const response = await getApplicantData();
      setApplicants(response);
      setFetchLoading(true);
    }
    fetchAndSetApplicants();
  }, []);

  const allAplicants = useRecoilValue<Applicant[]>(applicantAllData);
  const filteredApplicants = useRecoilValue<Applicant[]>(filteredApplicantData);

  const ITEMS_PER_PAGE = 6;
  const [items, setItems] = useState<ApplicantList>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;

  const getItemsOnTargetPage = (items: any) => {
    let itemsOnCurrentPage = 0;

    itemsOnCurrentPage = items
      .map((item: Applicant) => {
        return item;
      })
      .slice(indexOfFirst, indexOfLast);
    return itemsOnCurrentPage;
  };

  return (
    <Layout>
      <div style={{ maxWidth: "1500px" }}>
        <ListHeader />
        <SearchBar
          handleChagne={() => {}}
          dateOptionList={dateOptionList}
          checkOptionList={checkOptionList}
        />
        {fetchLoading || <Animation animation="SpinAnimation" />}
        {fetchLoading && (
          <>
            {/* TODO: List items로 getItemsOnTargetPage(filterApplicants) 쓰면 됨 */}
            {/* <List items={getItemsOnTargetPage(filterApplicants)} /> */}
            <List items={getItemsOnTargetPage(applicants)} />
            <PageNation
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={applicants.length}
              currentPage={currentPage}
              paginate={setCurrentPage}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
