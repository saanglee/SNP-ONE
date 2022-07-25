import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import Footer from "../components/dashboard/Footer";
import PageNation from "../components/dashboard/PageNation";

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
  const setApplicants = useSetRecoilState(applicantAllData);
  React.useEffect(() => {
    async function fetchAndSetApplicants() {
      const response = await getApplicantData();
      setApplicants(response);
    }

    fetchAndSetApplicants();
  }, []);

  const allAplicants = useRecoilValue<Applicant[]>(applicantAllData);
  const filteredApplicants = useRecoilValue<Applicant[]>(filteredApplicantData);

  const ITEMS_PER_PAGE = 6;
  const [items, setItems] = useState<ApplicantList>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;

  console.log(filteredApplicants); // 필터데이터를 이용해주시면 됩니다!

  console.log(allAplicants); // 전체데이터
  console.log("filteredApplicants", filteredApplicants); // 필터데이터
  // 전체데이터는 필터데이터와의 차이점을 보여주기 위해 콘솔에 찍었습니다.
  // 필터데이터를 이용해주시면 됩니다!

  useEffect(() => {
    // setItems(allAplicants);
    // setItems(filteredApplicants);
    setLoading(false);
  }, []);

  const getItemsOnCurrentPage = (items: any) => {
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
        {/* <List items={filteredApplicants} loading={loading} /> */}
        <List items={getItemsOnCurrentPage(items)} loading={loading} />
        <PageNation
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={items.length}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
