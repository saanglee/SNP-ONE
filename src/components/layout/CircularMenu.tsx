import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./circular.css";
import styled from "styled-components";
import { Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useLocation } from "react-router-dom";
import { activeStatus } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";

const CircularMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = useRecoilState(activeStatus);
  const location = useLocation();
  //   console.log(location.pathname);
  return (
    <>
      <div
        id="circularMenu"
        className={
          active
            ? "circular-menu circular-menu-left active"
            : "circular-menu circular-menu-left"
        }
      >
        <a
          className="floating-btn"
          onClick={() => setActive((state) => !state)}
        >
          <MenuIcon />
        </a>

        <menu className="items-wrapper">
          <IconBox className="menu-item">
            <Link href="/dash" color="inherit">
              <HomeIcon />
            </Link>
          </IconBox>

          <IconBox className="menu-item">
            <Link href="/dash" color="inherit">
              <HomeRepairServiceIcon />
            </Link>
          </IconBox>
          <IconBox className="menu-item">
            <Link href="/sign" color="inherit">
              <PhoneAndroidIcon />
            </Link>
          </IconBox>
        </menu>
      </div>
    </>
  );
};

export default CircularMenu;

const IconBox = styled.button`
  background-color: eee;
  border: none;
  transform: rotate(90deg);
  padding-top: 0.2rem;
  &:hover {
    background-color: black;
  }
`;
