import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const StyledMoodSpace = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  place-content: center;

  p {
    font-size: 1.2rem;
  }

  #logout-button {
    padding: 0.5rem;
    width: 6rem;
    font-size: 1rem;

    background-color: var(--accent-color);
    border-radius: 0.5rem;
    box-shadow: 3px 3px #000;
    transition: all 200ms ease-in-out;

    &:hover {
      box-shadow: 2px 2px #000;
    }
  }
`;

const MoodSpace = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  return (
    <StyledMoodSpace>
      <p>this is you mood space</p>
      <button id="logout-button" onClick={() => handleLogout()}>
        log out
      </button>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
