import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import PageNation from "../components/dashboard/PageNation";
import Animation from "../elements/Animations/Animation";

import { Applicant } from "../types/dashboard";
import {
  applicantAllData,
  filteredApplicantData,
  filteredApplicantState,
  FILTER_DEFAULT,
} from "../store/dashboard";
import { getApplicantData } from "../api/models/dashboard";

const Dashboard = () => {
  const setApplicants = useSetRecoilState(applicantAllData);
  const setApplicantFilter = useSetRecoilState(filteredApplicantState);
  const filteredApplicants = useRecoilValue(filteredApplicantData);
  const [fetchLoading, setFetchLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchAndSetApplicants() {
      const response = await getApplicantData();

      setApplicants(response);
      setApplicantFilter(FILTER_DEFAULT);
      setFetchLoading(true);
    }

    fetchAndSetApplicants();
  }, []);

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = React.useState(1);

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
      <div style={{ maxWidth: "1700px", minWidth: "1000px" }}>
        <ListHeader items={getItemsOnTargetPage(filteredApplicants)} />
        {fetchLoading || <Animation animation="SpinAnimation" />}
        {fetchLoading && (
          <>
            <SearchBar />
            <List
              items={getItemsOnTargetPage(filteredApplicants)}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
            />
            <PageNation
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={filteredApplicants.length}
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
