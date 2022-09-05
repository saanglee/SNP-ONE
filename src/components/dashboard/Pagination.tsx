import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

export interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const TOTAL_PAGES = pageNumbers.length;
  const LAST_PAGE = pageNumbers.length;
  const FIRST_PAGE = 1;
  const MOVE_FORWARD = '<';
  const MOVE_BACKWORD = '>';
  const handleMoveBackword = () => {
    if (TOTAL_PAGES === 0) return;
    if (currentPage === 1) return;
    paginate(currentPage - 1);
  };

  const handleMoveforword = () => {
    if (TOTAL_PAGES === 0) return;
    if (currentPage === TOTAL_PAGES) return;
    paginate(currentPage + 1);
  };

  return (
    <div>
      <PaginationContainer>
        <NumberOfItems>
          전체 {TOTAL_PAGES} 페이지 중 {currentPage} 페이지
        </NumberOfItems>
        <PageUl className="pagination">
          <PageButton
            onClick={handleMoveBackword}
            type="button"
            className="next_button"
          >
            {MOVE_FORWARD}
          </PageButton>

          {TOTAL_PAGES !== 1 && (
            <PageButton
              onClick={() => paginate(1)}
              type="button"
              className={cx('', { activePage: currentPage === FIRST_PAGE })}
            >
              {FIRST_PAGE}
            </PageButton>
          )}

          {currentPage > 3 && <span className="separator">...</span>}

          {currentPage === LAST_PAGE && TOTAL_PAGES > 3 && (
            <PageButton onClick={() => paginate(currentPage - 2)} type="button">
              {currentPage - 2}
            </PageButton>
          )}
          {currentPage > 2 && currentPage !== 0 && (
            <PageButton onClick={() => paginate(currentPage - 1)} type="button">
              {currentPage - 1}
            </PageButton>
          )}
          {currentPage !== 1 && currentPage !== TOTAL_PAGES && (
            <PageButton
              onClick={() => paginate(currentPage)}
              type="button"
              className="activePage"
            >
              {currentPage}
            </PageButton>
          )}
          {currentPage < TOTAL_PAGES - 1 && (
            <PageButton onClick={() => paginate(currentPage + 1)} type="button">
              {currentPage + 1}
            </PageButton>
          )}
          {currentPage === 1 && TOTAL_PAGES > 3 && (
            <PageButton onClick={() => paginate(currentPage + 2)} type="button">
              {currentPage + 2}
            </PageButton>
          )}
          {currentPage < TOTAL_PAGES - 2 && (
            <div className="separator">...</div>
          )}
          {/* Last page */}
          {TOTAL_PAGES !== 0 && (
            <PageButton
              onClick={() => paginate(LAST_PAGE)}
              type="button"
              className={cx('', { activePage: currentPage === LAST_PAGE })}
            >
              {LAST_PAGE}
            </PageButton>
          )}
          {/* Move forword */}

          <PageButton
            onClick={handleMoveforword}
            type="button"
            className="next_button"
          >
            {MOVE_BACKWORD}
          </PageButton>
        </PageUl>
      </PaginationContainer>
    </div>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
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
  &.activePage {
    border: 2px solid #6e8cd3;
  }
  &.next_button:hover {
    background-color: #cecece;
  }
`;
