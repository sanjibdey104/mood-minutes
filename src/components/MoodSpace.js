import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MoodForm from "./MoodForm";
import MoodLogs from "./MoodLogs";
import { FetchMoodLogs } from "../data/MoodLogsData";

const StyledMoodSpace = styled.section`
  width: 100%;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;
  }

  #time {
    font-size: 1.1rem;
  }

  #logout-button {
    padding: 0.3rem;
    width: 4.5rem;
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
  const moodLogs = FetchMoodLogs();
  const history = useHistory();

  const dt = new Date();
  const today = dayjs(dt).format("ddd, MMM DD");

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  return (
    <StyledMoodSpace>
      <div className="header">
        <p id="logo">MdMn</p>
        <p id="time">{today}</p>
        <button id="logout-button" onClick={() => handleLogout()}>
          log out
        </button>
      </div>

      <MoodForm />

      <MoodLogs moodLogs={moodLogs} />
    </StyledMoodSpace>
  );
};

export default MoodSpace;
