import styled from "styled-components";
import React, { ChangeEvent } from "react";

type PropsType = {
  handleChagne: object;
  optionList1: any;
  optionList2: any;
};

const SearchBar = (props: PropsType) => {
  const [inputState, setInputState] = React.useState<string>(""); // 임시 useState

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };
  const handleClick = () => {};

  return (
    <SearchBarContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="지원자명"
          value={inputState}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleClick}>검색</SearchButton>
        <Filter name="" onChange={() => {}}>
          {props.optionList1.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
        <Filter name="" onChange={() => {}}>
          {props.optionList2.map((item: any, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
      </div>
      <ButtonWrapper>
        <OrderButton>1차</OrderButton>
        <OrderButton>2차</OrderButton>
      </ButtonWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  background-color: #eff3ff;
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

const OrderButton = styled.button`
  background-color: #6e8cd3;
  color: white;
  border-radius: 7px;
  border: 1px solid #d9d9d9d9;
  width: 90px;
  height: 40px;
  margin-right: 10px;
`;

const Filter = styled.select`
  border-radius: 8px;
  border: 1px solid #d9d9d9d9;
  width: 150px;
  height: 40px;
  margin: 10px;
`;
