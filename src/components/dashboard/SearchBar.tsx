import styled from "styled-components";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { filteredApplicantState } from "../../store/dashboard";

// TODO: select 타입 지정하기
const dateOptionList = [
  { name: "최신순", value: "asc" },
  { name: "오래된 순", value: "desc" },
] as any;

const checkOptionList = [
  { name: "전체", value: "all" },
  { name: "당첨", value: "checked" },
  { name: "미당첨", value: "unchecked" },
] as any;

const SearchBar = () => {
  const [filter, setFilter] = useRecoilState(filteredApplicantState);
  const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <SearchBarContainer>
      <div>
        {/* 이름 검색창
        - ref로 변경
        - onSubmit시 setFilter(현재 입력값)
        */}
        <form>
          <SearchInput type="text" placeholder="지원자명" />
          <SearchButton>검색</SearchButton>
        </form>
        <Filter
          name="sort"
          defaultValue={filter.sort}
          onChange={changeSelectHandler}
        >
          {dateOptionList.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
        <Filter
          name="isChecked"
          defaultValue={filter.isChecked}
          onChange={changeSelectHandler}
        >
          {checkOptionList.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
      </div>
      {/* 1차, 2차 */}
      <ButtonWrapper>
        {/* <OrderBtn>1차</OrderBtn> */}
        {/* <OrderBtn>차</OrderBtn> */}
        <button>1차</button>
        <button>2차</button>
      </ButtonWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  background-color: #eff3ff;
  border: 1px solid #d9d9d9;
  height: 90px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid #d9d9d9d9;
  width: 350px;
  height: 40px;
  margin-left: 20px;
  margin-right: 10px;
  padding-left: 10px;
`;

const SearchButton = styled.button`
  background-color: #0f2c6e;
  color: white;
  border-radius: 7px;
  border: 1px solid #d9d9d9d9;
  width: 50px;
  height: 40px;
`;

const ButtonWrapper = styled.div`
  margin-right: 30px;
`;

const OrderButton = styled.button<{ toggle: boolean }>`
  background-color: #6e8cd3;
  color: white;
  font-size: 18px;
  border-radius: 7px 0 0 7px;
  border: 0.5px solid #d9d9d9;
  width: 120px;
  height: 40px;
  background-color: ${(props) => `${props.toggle ? "#0f2c6e" : "#48619B"}`};
`;

const Filter = styled.select`
  border-radius: 8px;
  border: 1px solid #d9d9d9d9;
  width: 150px;
  height: 40px;
  margin: 10px;
`;
