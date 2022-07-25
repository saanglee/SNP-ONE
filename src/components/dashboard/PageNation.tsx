import React from "react";
import styled from "styled-components";

export interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
}

const PageNation: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PageNationContainer>
        <NumberOfItems> 1-4 of {totalItems}</NumberOfItems>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </PageNationContainer>
    </div>
  );
};

export default PageNation;

const PageNationContainer = styled.div`
  background-color: #eff3ff;
  color: #0f2c6e;
  height: 50px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const NumberOfItems = styled.div``;

const PageUl = styled.ul`
  background-color: #eff3ff;
  color: #0f2c6e;
  list-style: none;
  text-align: center;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
