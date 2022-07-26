import React, { useState, useEffect, ReactNode } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import PageNation from "../components/dashboard/PageNation";
import Animation from "../elements/Animations/Animation";

import { ApplicantList, Applicant } from "../types/datshboard";
import { applicantAllData, filteredApplicantData } from "../store/dashboard";
import { getApplicantData } from "../api/models/dashboard";

const Dashboard = () => {
  const setApplicants = useSetRecoilState(applicantAllData);
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

  const ITEMS_PER_PAGE = 6;
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
        <SearchBar />
        {fetchLoading || <Animation animation="SpinAnimation" />}
        {fetchLoading && (
          <>
            <List items={getItemsOnTargetPage(filterApplicants)} />
            <PageNation
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={filterApplicants.length}
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
