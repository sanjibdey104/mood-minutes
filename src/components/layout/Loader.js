import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  gap: 0.4rem;
  transform: rotate(180deg);

  span {
    height: 100%;
    width: 0.5rem;
    background: linear-gradient(
      to top,
      rgba(38, 70, 83, 1) 0%,
      rgba(42, 157, 143, 1) 34%,
      rgba(233, 196, 106, 1) 100%
    );

    animation: equalize 500ms steps(20, end) 0s infinite;
  }

  span:nth-child(1) {
    animation-delay: 100ms;
  }
  span:nth-child(2) {
    animation-delay: 150ms;
  }
  span:nth-child(3) {
    animation-delay: 200ms;
  }

  @keyframes equalize {
    0% {
      height: 10%;
    }
    25% {
      height: 25%;
    }
    50% {
      height: 50%;
    }
    75% {
      height: 75%;
    }
    100% {
      height: 100%;
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <span></span>
      <span></span>
      <span></span>
    </StyledLoader>
  );
};

export default Loader;
