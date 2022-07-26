import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { filteredApplicantState } from "../../store/dashboard";

type filterSelect = {
  [key: string]: string;
};

const dateOptionList = [
  { name: "최신순", value: "asc" },
  { name: "오래된 순", value: "desc" },
];

const checkOptionList = [
  { name: "전체", value: "all" },
  { name: "당첨", value: "checked" },
  { name: "미당첨", value: "unchecked" },
];

const SearchBar = () => {
  const [filter, setFilter] = useRecoilState(filteredApplicantState);
  const nameInput = React.useRef<HTMLInputElement>(null);

  const changeFilterCallback = (name: string, value?: string) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const changeNameHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    changeFilterCallback(name, nameInput.current?.value);
  };

  const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    changeFilterCallback(name, value);
  };

  const changeRecruitmentHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { name, value } = event.currentTarget;
    changeFilterCallback(name, value);
  };

  return (
    <SearchBarContainer>
      <div>
        <SearchForm name="name" onSubmit={changeNameHandler}>
          <SearchInput type="text" placeholder="지원자명" ref={nameInput} />
          <SearchButton>검색</SearchButton>
        </SearchForm>
        <Filter
          name="sort"
          defaultValue={filter.sort}
          onChange={changeSelectHandler}
        >
          {dateOptionList.map((item: filterSelect, index: number) => {
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
          {checkOptionList.map((item: filterSelect, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Filter>
      </div>
      <ButtonWrapper>
        <OrderButton
          value="1"
          name="recruitment"
          toggle={filter.recruitment === "1"}
          onClick={changeRecruitmentHandler}
        >
          1차
        </OrderButton>
        <OrderButton
          value="2"
          name="recruitment"
          toggle={filter.recruitment === "2"}
          onClick={changeRecruitmentHandler}
        >
          2차
        </OrderButton>
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
  & > div {
    display: flex;
    align-items: center;
  }
`;

const SearchForm = styled.form`
  display: flex;
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
  gap: 0.5rem;
`;

const OrderButton = styled.button<{ toggle: boolean }>`
  background-color: #6e8cd3;
  color: white;
  font-size: 18px;
  border-radius: 7px;
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
