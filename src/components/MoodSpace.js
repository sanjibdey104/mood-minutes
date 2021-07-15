import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const StyledMoodSpace = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  place-content: center;

  #mood-input {
    padding: 0.2rem 0.75rem;
    font-size: 1.75rem;
    margin-bottom: 2rem;

    border: 0;
    border-bottom: 1px solid black;
  }

  #mood-description {
    font-size: 1.1rem;
    padding: 0.3rem 0.75rem;
    border: 0;
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
  const [mood, setMood] = useState("");

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  return (
    <StyledMoodSpace>
      <p>Hi, user</p>
      <input
        type="text"
        id="mood-input"
        placeholder="How's your mood today?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="want to tell more?"
        id="mood-description"
      ></textarea>
      <button id="logout-button" onClick={() => handleLogout()}>
        log out
      </button>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
