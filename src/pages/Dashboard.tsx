import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import Footer from "../components/dashboard/Footer";
import PageNation from "../components/dashboard/PageNation";

import { ApplicantList, Applicant } from "../types/datshboard";
import dummy from "../components/dashboard/dummy.json";

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
  const [items, setItems] = useState<ApplicantList>([]); // TODO: any 변경, 타입지정!
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;
  // const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;

  const dummyData = dummy;

  useEffect(() => {
    console.log("dummyData: ", dummyData);
    setItems(dummyData);
    console.log("items: ", items);
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
        <List items={getItemsOnCurrentPage(items)} loading={loading} />
        <PageNation
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={items.length}
          paginate={setCurrentPage}
        />
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
