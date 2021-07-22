import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MoodForm from "./MoodForm";
import MoodLogs from "./MoodLogs";
import { FetchMoodLogs } from "../data/MoodLogsData";
import Logo from "./Logo";
import meditating from "../images/open-doodles-meditating.svg";
import WeeklyMoodChart from "../components/WeeklyMoodChart";
import MoodFrequencyChart from "./MoodFrequencyChart";

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

  .mood-charts {
    width: clamp(22rem, 55vw, 45rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    h3 {
      font-weight: lighter;
      font-size: 1.1rem;
    }

    .weekly-mood-chart,
    .mood-frequency-chart {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const MoodSpace = () => {
  const { logout } = useContext(AuthContext);
  const moodLogs = FetchMoodLogs();
  const moodMojis = [
    {
      mood: "sad",
      code: 0,
    },
    {
      mood: "nervous",
      code: 1,
    },
    {
      mood: "angry",
      code: 2,
    },
    {
      mood: "confused",
      code: 3,
    },
    {
      mood: "neutral",
      code: 4,
    },
    {
      mood: "happy",
      code: 5,
    },
    {
      mood: "cool",
      code: 6,
    },
  ];
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
        <Logo />
        <p id="time">{today}</p>
        <button id="logout-button" onClick={() => handleLogout()}>
          log out
        </button>
      </div>
      <img src={meditating} alt="meditating mood" id="meditating-doodle" />
      <MoodForm />
      <MoodLogs moodLogs={moodLogs.slice(0, 4)} />
      <section className="mood-charts">
        <div className="weekly-mood-chart">
          <h3>Weekly mood chart</h3>
          <WeeklyMoodChart moodLogs={moodLogs} />
        </div>
        <div className="mood-frequency-chart">
          <h3>Your mood frequency chart</h3>
          <MoodFrequencyChart moodMojis={moodMojis} moodLogs={moodLogs} />
        </div>
      </section>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
