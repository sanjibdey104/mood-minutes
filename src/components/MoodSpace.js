import React from "react";
import styled from "styled-components";

const StyledMoodSpace = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  place-content: center;

  p {
    font-size: 1.2rem;
  }
`;

const MoodSpace = () => {
  return (
    <StyledMoodSpace>
      <p>this is you mood space</p>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
