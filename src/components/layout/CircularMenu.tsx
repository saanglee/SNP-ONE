import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "styled-components";
import { styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useLocation, Link } from "react-router-dom";
import { activeStatus, openStatus } from "../../store/global";
import { useRecoilState, useRecoilValue } from "recoil";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const CircularMenu = () => {
  const [active, setActive] = useRecoilState(activeStatus);
  const [open, setOpen] = useRecoilState(openStatus);
  const location = useLocation();
  //   console.log(location.pathname);
  return (
    <>
      <CircularContainer
        className={
          active
            ? "circular-menu circular-menu-left active"
            : "circular-menu circular-menu-left"
        }
      >
        <FloatingButton
          className="floating-btn"
          onClick={() => setActive((state) => !state)}
        >
          <MenuIcon />
        </FloatingButton>

        <ItemWrapper>
          <BootstrapTooltip
            title={location.pathname === "/" ? "여기가 홈입니다" : "Home"}
            placement="top"
          >
            <button
              className={active ? "active menu-item" : "menu-item"}
              onClick={() => setOpen(false)}
            >
              <StyledLink to="/">
                <HomeIcon className="icon" />
              </StyledLink>
            </button>
          </BootstrapTooltip>
          <BootstrapTooltip title="AdminPage" placement="top">
            <button
              className={active ? "active menu-item" : "menu-item"}
              onClick={() => setOpen(false)}
            >
              <StyledLink to="/dash">
                <HomeRepairServiceIcon className="icon" />
              </StyledLink>
            </button>
          </BootstrapTooltip>
          <BootstrapTooltip title="About us" placement="top">
            <button className={active ? "active menu-item" : "menu-item"}>
              <StyledLink to="/about">
                <PhoneAndroidIcon className="icon" />
              </StyledLink>
            </button>
          </BootstrapTooltip>
        </ItemWrapper>
      </CircularContainer>
    </>
  );
};

export default CircularMenu;

const StyledLink = styles(Link)`
color: #fff;
`;

const CircularContainer = styles.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
  &:after {
    display: block;
    content: " ";
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    transition: all 0.3s ease;
    .active {
      transform: rotate(90deg);
    }
    .active:after {
      transform: scale3d(5.5, 5.5, 1);
      transition-timing-function: cubic-bezier(0.68, 1.55, 0.265, 1);
    }
  }
`;

const FloatingButton = styles.a`
  display: block;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  background-color: #0f2c6e;
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.26);
  color: hsl(0, 0%, 100%);
  text-align: center;
  line-height: 3.9;
  cursor: pointer;
  outline: 0;
`;

const ItemWrapper = styles.menu`
  padding: 0;
  margin: 0;
  .menu-item {
    &:hover {
      background-color: black;
    }
    .icon {
      margin-top: 0.4rem;
    }
    background-color: eee;
    border: none;
    transform: rotate(90deg);
    padding-top: 0.2rem;
    position: absolute;
    top: 0.2em;
    right: 0.2em;
    z-index: -1;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 1em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    line-height: 3;
    background-color: hsla(0, 0%, 0%, 0.1);
    transition: transform 0.3s ease, background 0.2s ease;
  }

  .active {
    &:nth-child(1) {
      transform: translate3d(4em, 0em, 0);
    }
    &:nth-child(2) {
      transform: translate3d(2em, 3.5em, 0);
    }
    &:nth-child(3) {
      transform: translate3d(-2em, 3.5em, 0);
    }
  }
`;

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 17,
    borderRadius: 7,
  },
}));
