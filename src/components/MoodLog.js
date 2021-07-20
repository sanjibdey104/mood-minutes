import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const StyledMoodLog = styled.li`
  width: 20rem;
  border-radius: 0.5rem;
  position: relative;

  padding: 0.5rem;
  box-shadow: var(--box-shadow);
  font-family: var(--secondary-font);
  background: linear-gradient(45deg, #cebeff, #c4baff);

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
