import React, { useState, useEffect, Suspense } from "react";
import { useRecoilValue } from "recoil";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import Footer from "../components/dashboard/Footer";
import PageNation from "../components/dashboard/PageNation";

import { ApplicantList, Applicant } from "../types/datshboard";
import dummy from "../components/dashboard/dummy.json";
import { applicantAllData } from "../store/dashboard";

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
  const ITEMS_PER_PAGE = 6;
  const AllAplicants = useRecoilValue<Applicant[]>(applicantAllData);

  const [items, setItems] = useState<ApplicantList>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;

  const dummyData = dummy;
  console.log(AllAplicants);

  useEffect(() => {
    // const allApplicantsArray: ApplicantList = [];
    // allApplicantsArray.push(AllAplicants);
    // setItems(allApplicantsArray);
    // setItems(dummy);
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
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <div style={{ maxWidth: "1500px" }}>
          <ListHeader />
          <SearchBar
            handleChagne={() => {}}
            dateOptionList={dateOptionList}
            checkOptionList={checkOptionList}
          />
          <List items={getItemsOnCurrentPage(items)} loading={loading} />
          <PageNation
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={items.length}
            paginate={setCurrentPage}
          />
          {/* <Footer /> */}
        </div>
      </Layout>
    </Suspense>
  );
};

export default Dashboard;
