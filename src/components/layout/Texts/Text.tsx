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

const Text = (props: TextType) => {
  const {
    children,
    className,
    onClick,
    size = 25,
    color = "black",
    mx,
    my,
  } = props;
  console.log(size);
  return (
    <TextElement
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      mx={mx}
      my={my}
    >
      {children}
    </TextElement>
  );
};

export default Text;

const TextElement = styled.p<{
  size?: number;
  color?: string;
  mx?: number;
  my?: number;
}>`
  font-family: "Font-light";
  font-size: ${(props) => `${props.size}em` || "16px"};
  letter-spacing: 0.05em;
  color: ${(props) => props.color};
  margin: ${(props) =>
    props.mx && props.my
      ? `${props.my}px ${props.mx}px ${props.my}px ${props.mx}px`
      : props.my
      ? `${props.my}px 0 ${props.my}px 0`
      : `0 ${props.mx}px 0 ${props.mx}px`};
`;
