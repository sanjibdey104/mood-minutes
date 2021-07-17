import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const StyledMoodLog = styled.li`
  width: 20rem;
  border-radius: 0.5rem;
  position: relative;

  padding: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to right, #9866f9, #9d4edd);
  font-family: var(--secondary-font);
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 0.85rem;
  }

  #mood-moji {
    width: 1.85rem;
    position: absolute;
    top: 4%;
    right: 3%;
  }

  #date {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-left: auto;
    font-size: 0.75rem;
  }
`;

const MoodLog = ({ moodLog }) => {
  const { mood, moodShortDesc, moodLongDesc, moodMojiSrc, loggedAt } = moodLog;
  const day = dayjs(loggedAt.toDate()).format("ddd, MMM DD");
  const time = dayjs(loggedAt.toDate()).format("hh:mm A");

  return (
    <StyledMoodLog>
      <h3>{mood}</h3>
      <p>{moodShortDesc}</p>
      <p>{moodLongDesc}</p>
      <img src={moodMojiSrc} alt="mood emoji" id="mood-moji" />
      <p id="date">
        <span>{day}</span>
        <span>{time}</span>
      </p>
    </StyledMoodLog>
  );
};

export default MoodLog;
