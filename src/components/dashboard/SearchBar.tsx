import styled from "styled-components";
import React, { ChangeEvent } from "react";

type PropsType = {
  handleChagne: object;
  dateOptionList: any;
  checkOptionList: any;
};

const SearchBar = (props: PropsType) => {
  const [inputState, setInputState] = React.useState<string>(""); // 임시 useState
  const [dateSort, setDateSort] = React.useState<string>("latest");
  const [checkFilter, setCheckFilter] = React.useState<string>("all");

  const [isActiveOrder1, setIsActiveOrder1] = React.useState<boolean>(true);
  const [isActiveOrder2, setIsActiveOrder2] = React.useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };
  const handleClickSearch = () => {};

  const handleDateSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDateSort(event.target.value);
  };
  const handleCheckFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCheckFilter(event.target.value);
  };

  const handleClickOrderButton = () => {
    setIsActiveOrder1((current) => !current);
    setIsActiveOrder2((current) => !current);
  };

  return (
    <SearchBarContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="지원자명"
          value={inputState}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleClickSearch}>검색</SearchButton>

        <Filter value="dateSort" onChange={handleDateSortChange}>
          {props.dateOptionList.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
        <Filter value="checkFilter" onChange={handleCheckFilterChange}>
          {props.checkOptionList.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
      </div>
      <ButtonWrapper>
        <OrderButton1 onClick={handleClickOrderButton} toggle={isActiveOrder1}>
          1차
        </OrderButton1>
        <OrderButton2 onClick={handleClickOrderButton} toggle={isActiveOrder2}>
          2차
        </OrderButton2>
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

const OrderButton1 = styled.button<{ toggle: boolean }>`
  background-color: #6e8cd3;
  color: white;
  font-size: 18px;
  border-radius: 7px 0 0 7px;
  border: 0.5px solid #d9d9d9;
  width: 120px;
  height: 40px;
  background-color: ${(props) => `${props.toggle ? "#0f2c6e" : "#48619B"}`};
`;

const OrderButton2 = styled.button<{ toggle: boolean }>`
  background-color: #6e8cd3;
  color: white;
  font-size: 18px;
  border-radius: 0 7px 7px 0;
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
