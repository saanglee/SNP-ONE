import React from "react";
import styled from "styled-components";
import "./dashboard.css";
import { Applicant } from "../../types/datshboard";
import { patchIsApplicantChecked } from "../../api/models/dashboard";
import { useRecoilState } from "recoil";
import { applicantAllData } from "../../store/dashboard";
import { replaceItemAtIndex } from "../../util/replaceItemIndex";

/* eslint-disable react/prop-types */

const ListItem = ({ data, index }: { data: Applicant; index: number }) => {
  const {
    id, //  FIXME: index를 넣으면 페이지 넘어가도 계속 번호에 0 ~ 4 만 뜸
    DateOfApplication,
    name,
    gender,
    DateOfBirth,
    phone,
    email,
    transportation,
    address,
    isChecked,
  } = data;

  const [applicants, setApplicants] = useRecoilState(applicantAllData);

  const toggleChecked = async (applicant: Applicant) => {
    const changeApplicantIdx = applicants.findIndex(
      ({ id: applicantId }: Applicant) => id === applicantId,
    );

    let updatedApplicants = replaceItemAtIndex(applicants, changeApplicantIdx, {
      ...applicant,
      isChecked: !applicant.isChecked,
    }) as Applicant[];
    setApplicants(updatedApplicants);

    const { status } = await patchIsApplicantChecked(applicant);
    if (status === 200) return;
    updatedApplicants = replaceItemAtIndex(applicants, changeApplicantIdx, {
      ...applicant,
      isChecked: !applicant.isChecked,
    });
    setApplicants(updatedApplicants);
  };

  // FIXME: input checkbox handle change (필요 시 삭제 가능입니다.)
  const [isCheckedState, setIsCheckedState] =
    React.useState<boolean>(isChecked);

  // const toggleChecked = async (applicant: Applicant) => {
  //   let updatedApplicants = replaceItemAtIndex(applicants, index, {
  //     ...applicant,
  //     // isChecked: !applicant.isChecked,
  //     isChecked: isCheckedState,
  //   }) as Applicant[];

  //   setApplicants(updatedApplicants);

  //   const { status } = await patchIsApplicantChecked(applicant);
  //   if (status === 200) return;
  //   updatedApplicants = replaceItemAtIndex(applicants, index, {
  //     ...applicant,
  //     isChecked: !applicant.isChecked,
  //   });
  //   setApplicants(updatedApplicants);
  // };

  const handleCheckChagne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedState((current) => !current);
    // toggleChecked(data);
  };

  return (
    <ListItemContainer className="ListItem">
      <TD>{id}</TD>
      <TD>{DateOfApplication}</TD>
      <TD>{name}</TD>
      <TD>{gender}</TD>
      <TD>{DateOfBirth}</TD>
      <TD>{phone}</TD>
      <TD>{email}</TD>
      <TD>{transportation}</TD>
      <TD>{address}</TD>

      <ListCheckboxWrapper className="checkboxWrapper">
        <ListCheckbox
          type="checkbox"
          checked={isChecked}
          // onChange={() => toggleChecked(data)}
          onChange={handleCheckChagne}
        />
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
