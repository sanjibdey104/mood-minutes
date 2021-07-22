import React, { useContext } from "react";
import styled from "styled-components";
import { MoodDataContext, MoodDataProvider } from "../context/MoodContext";
import MoodLog from "./MoodLog";

const StyledMoodLogs = styled.section`
  min-width: 75%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2rem;

  #title {
    font-size: 1.2rem;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    gap: 2rem;
  }
`;

const MoodLogs = () => {
  let { moodLogs } = useContext(MoodDataContext);

  // display only the latest 4 mood logs
  moodLogs = moodLogs.slice(0, 4);

  return (
    <StyledMoodLogs>
      <p id="title">Your recent mood logs</p>
      <ul className="mood-logs">
        {moodLogs &&
          moodLogs.map((moodLog) => (
            <MoodLog moodLog={moodLog} key={moodLog.key} />
          ))}
      </ul>
    </StyledMoodLogs>
  );
};

export default MoodLogs;
