import react from "react";
import styled from "styled-components";
import Animation from "../components/layout/animation/Animation";
const NotFound404 = () => {
  return (
    <>
      <Box>
        <Animation animation="For404Animation" />
      </Box>
    </>
  );
};

export default NotFound404;

const Box = styled.div`
  width: 60%;
  height: fit-content;
  margin: auto;
  overflow: hidden;
`;
