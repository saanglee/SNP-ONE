import React from "react";
import styled from "styled-components";

export interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: any;
}

const PageNation: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const totalPages = pageNumbers.length;
  // console.log(itemsPerPage, totalItems, currentPage);

  return (
    <div>
      <PageNationContainer>
        <NumberOfItems> 1-4 of {totalItems}</NumberOfItems>
        <PageUl className="pagination">
          {/* Move backword */}
          <PageButton onClick={() => paginate(currentPage - 1)} type="button">
            &lt;
          </PageButton>
          {/* First page */}
          <PageButton
            onClick={() => paginate(1)}
            type="button"

            // className={classNames(styles.pageItem, {[styles.active]: page === 1,})}
          >
            {1}
          </PageButton>
          {currentPage > 3 && <span className="separator">...</span>}
          {/* {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))} */}
          {currentPage === totalPages &&
            totalPages > 3 && ( // 전체 페이지가 2개 이하, 현재 페이지가 마지막 페이지일 경우
              <PageButton
                onClick={() => paginate(currentPage - 2)}
                type="button"
              >
                {currentPage - 2}
              </PageButton>
            )}
          {currentPage > 2 &&
            currentPage !== 0 && ( // 현재 페이지가 세번째페이지 이상일 경우
              <PageButton
                onClick={() => paginate(currentPage - 1)}
                type="button"
              >
                {currentPage - 1}
              </PageButton>
            )}
          {currentPage !== 1 &&
            currentPage !== totalPages && ( // 현재 페이지가 첫번째페이지가 아니고 전체 페이지도 아닐 경우??
              <PageButton
                onClick={() => paginate(currentPage)}
                type="button"
                // className={[styles.pageItem, styles.active].join(' ')}
              >
                {currentPage}
              </PageButton>
            )}
          {currentPage < totalPages - 1 && ( // 현재페이지가 마지막 페이지의 -1 번째 페이지보다 작을 경우?
            <PageButton
              onClick={() => paginate(currentPage + 1)}
              type="button"
              // className={styles.pageItem}
            >
              {currentPage + 1}
            </PageButton>
          )}
          {currentPage === 1 &&
            totalPages > 3 && ( // 현재페이지가 첫번째이고 총 페이지 갯수는 2 이하일 경우
              <PageButton
                onClick={() => paginate(currentPage + 2)}
                type="button"
                // className={styles.pageItem}
              >
                {currentPage + 2}
              </PageButton>
            )}
          {currentPage < totalPages - 2 && <div className="separator">...</div>}
          {/* Last page */}
          {totalPages !== 0 && (
            <PageButton
              onClick={() => paginate(totalPages)}
              type="button"
              // className={classNames(styles.pageItem, {[styles.active]: page === totalPages,})}
            >
              {totalPages}
            </PageButton>
          )}
          {/* Move forword */}
          {currentPage !== totalPages && (
            <PageButton
              onClick={() => paginate(currentPage + 1)}
              type="button"
              // className={[styles.pageItem, styles.sides].join(" ")}
            >
              &gt;
            </PageButton>
          )}
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
  width: 300px;
  height: inherit;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PageButton = styled.button`
  color: #0f2c6e;
  height: 35px;
  width: 35px;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background-color: white;
  &:hover {
    background-color: white;
  }
`;
/* ----------------------- */
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
