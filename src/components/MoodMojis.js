import React, { useState } from "react";
import styled from "styled-components";

// import emoji pngs
import cool from "../images/emojis/cool.png";
import sad from "../images/emojis/sad.png";
import happy from "../images/emojis/happy.png";
import nervous from "../images/emojis/nervous.png";
import neutral from "../images/emojis/neutral.png";
import angry from "../images/emojis/angry.png";
import confused from "../images/emojis/confused.png";

const MoodMojisArray = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1rem;

  li {
    position: relative;
    list-style: none;
    padding: 0.3rem;
    border-radius: 0.5rem;

    &.selected {
      background: linear-gradient(45deg, #cebeff, #c4baff);
    }

    &::after {
      content: attr(data-tooltip);
      display: inline-block;

      width: auto;
      height: 2rem;
      font-size: 0.75rem;
      font-family: var(--secondary-font);

      position: absolute;
      bottom: -80%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .mood-moji {
    width: clamp(1.85rem, 5vw, 2.5rem);
    cursor: pointer;
  }
`;

const MoodMojis = ({ moodMethods }) => {
  const { setMood, setCode, setMoodMojiSrc } = moodMethods;
  const [selectedEmoji, setSelectedEmoji] = useState(5);

  const moodMojis = [
    {
      mood: "sad",
      src: sad,
      code: 0,
    },
    {
      mood: "nervous",
      src: nervous,
      code: 1,
    },
    {
      mood: "angry",
      src: angry,
      code: 2,
    },
    {
      mood: "confused",
      src: confused,
      code: 3,
    },
    {
      mood: "neutral",
      src: neutral,
      code: 4,
    },
    {
      mood: "happy",
      src: happy,
      code: 5,
    },
    {
      mood: "cool",
      src: cool,
      code: 6,
    },
  ];

  const handleMood = (index, mood, code, src) => {
    setSelectedEmoji(index);
    setMood(mood);
    setCode(code);
    setMoodMojiSrc(src);
  };

  return (
    <MoodMojisArray>
      {moodMojis.map(({ mood, code, src }, index) => (
        <li
          data-tooltip={mood}
          onClick={() => handleMood(index, mood, code, src)}
          key={mood}
          className={index === selectedEmoji ? "selected" : null}
        >
          <img src={src} alt="emoji face" className="mood-moji" />
        </li>
      ))}
    </MoodMojisArray>
  );
};

export default MoodMojis;
