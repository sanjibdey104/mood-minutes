import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MoodForm from "./MoodForm";
import MoodLogs from "./MoodLogs";
import { FetchMoodLogs } from "../data/MoodLogsData";
import meditating from "../images/open-doodles-meditating.svg";
import MoodChart from "./MoodChart";

const StyledMoodSpace = styled.section`
  width: 100%;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

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
  }

  #meditating-doodle {
    width: clamp(10rem, 15vw, 16rem);
    animation: meditate 3s linear 0s infinite;

    @keyframes meditate {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(5%);
      }
      50% {
        transform: translateY(10%);
      }
      75% {
        transform: translateY(5%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .mood-chart {
    width: clamp(22rem, 50vw, 40rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h3 {
      font-weight: lighter;
      font-size: 1.2rem;
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
      <img src={meditating} alt="meditating mood" id="meditating-doodle" />
      <MoodForm />
      <MoodLogs moodLogs={moodLogs.slice(0, 4)} />
      <div className="mood-chart">
        <h3>Last 7 days mood chart</h3>
        <MoodChart moodLogs={moodLogs} />
      </div>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
