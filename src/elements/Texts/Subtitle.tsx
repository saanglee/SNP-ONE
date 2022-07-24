import React from "react";
import styled from "styled-components";

type TextType = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
  mx?: number;
  my?: number;
};

const Subtitle = (props: TextType) => {
  const {
    children,
    className,
    onClick,
    size = 1,
    color = "black",
    mx,
    my,
  } = props;

  return (
    <SubtitleElement
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      mx={mx}
      my={my}
    >
      {children}
    </SubtitleElement>
  );
};

export default Subtitle;

const SubtitleElement = styled.h3<{
  size?: number;
  color?: string;
  mx?: number;
  my?: number;
}>`
  height: fit-content;
  font-family: "Gfont_regular";
  font-size: ${(props) => `${props.size}em` || "20px"};
  letter-spacing: -0.1em;
  color: ${(props) => props.color};
  margin: ${(props) =>
    props.mx && props.my
      ? `${props.my}px ${props.mx}px ${props.my}px ${props.mx}px`
      : props.my
      ? `${props.my}px 0 ${props.my}px 0`
      : `0 ${props.mx}px 0 ${props.mx}px`};
`;
