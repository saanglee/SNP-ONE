import Layout from "../components/layout/Layout";
import ListHeader from "../components/dashboard/ListHeader";
import SearchBar from "../components/dashboard/SearchBar";
import List from "../components/dashboard/List";
import Footer from "../components/dashboard/Footer";

const sortOptionList = [
  // TODO: 확정 아님
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "checked", name: "당첨" },
  { value: "unchecked", name: "미당첨" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ maxWidth: "1500px" }}>
        <ListHeader />
        <SearchBar
          handleChagne={() => {}}
          optionList1={sortOptionList}
          optionList2={filterOptionList}
        />
        <List />
        <Footer />
      </div>
    </Layout>
  );
};

export default Dashboard;
