import styled from "styled-components";
import "./dashboard.css";
import { Applicant } from "../../types/type";

/* eslint-disable react/prop-types */

const ListItem = ({ data, index }: { data: Applicant; index: number }) => {
  const {
    DateOfApplication,
    name,
    gender,
    DateOfBirth,
    phone,
    email,
    transportation,
    address,
  } = data;
  return (
    <ListItemContainer className="ListItem">
      {/* {item.map((item: string | number | boolean, index: number) => {
        return <TD key={index}>{item} </TD>;
      })} */}
      <TD>{index}</TD>
      <TD>{DateOfApplication}</TD>
      <TD>{name}</TD>
      <TD>{gender}</TD>
      <TD>{DateOfBirth}</TD>
      <TD>{phone}</TD>
      <TD>{email}</TD>
      <TD>{transportation}</TD>
      <TD>{address}</TD>

      <ListCheckboxWrapper className="checkboxWrapper">
        <ListCheckbox type="checkbox" />
      </ListCheckboxWrapper>
    </ListItemContainer>
  );
};

export default ListItem;

const ListItemContainer = styled.tr``;

const ListCheckboxWrapper = styled.td`
  display: flex;
  height: 67px;
  justify-content: center;
  align-items: center;
`;

const ListCheckbox = styled.input`
  display: block;
  width: 30px;
  height: 30px;
`;

const TD = styled.td`
  text-align: center;
  padding-top: 10px;
`;
