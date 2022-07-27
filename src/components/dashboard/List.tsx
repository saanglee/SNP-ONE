import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import "./dashboard.css";

interface PropsType {
  items: any;
  currentPage: number;
  itemsPerPage: number;
}

const TABLE_HEADER: string[] = [
  "번호",
  "지원날짜",
  "지원자명",
  "성별",
  "생년월일",
  "연락처",
  "이메일",
  "이용수단",
  "거주지",
  "당첨여부",
];

const List = ({ items, currentPage, itemsPerPage }: PropsType) => {
  return (
    <LitsContainer>
      <ListTable>
        <ListTableHeader>
          <tr>
            {TABLE_HEADER.map((item: string, index: number) => {
              return <TH key={index}>{item} </TH>;
            })}
          </tr>
        </ListTableHeader>

        <tbody>
          {items.map((item: any, index: number) => {
            return (
              <ListItem
                key={item.id}
                data={item}
                index={(currentPage - 1) * itemsPerPage + index + 1}
                transportation={item.transportation.join(", ")}
              />
            );
          })}
        </tbody>
      </ListTable>
    </LitsContainer>
  );
};

export default List;

const LitsContainer = styled.div`
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 600px;
`;

const ListTable = styled.table`
  border-collapse: collapse;
`;

const ListTableHeader = styled.thead`
  background-color: #eff3ff;
  color: #0f2c6e;
  white-space: nowrap;
  height: 50px;
`;

const TH = styled.th`
  padding: 15px;
  font-weight: normal;
`;
