import React, { useContext, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import { db } from "../firebase/initFirebase";
import { MdAdd } from "react-icons/md";

// mood emojis
import cool from "../images/emojis/cool.png";
import sad from "../images/emojis/sad.png";
import happy from "../images/emojis/happy.png";
import nervous from "../images/emojis/nervous.png";
import neutral from "../images/emojis/neutral.png";
import angry from "../images/emojis/angry.png";
import confused from "../images/emojis/confused.png";
import { AuthContext } from "../context/AuthContext";

const StyledMoodForm = styled.form`
  min-width: 50%;
  max-width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  #greet {
    font-size: 1.2rem;
  }

  .mood-input-section {
    border-radius: 10rem;
    padding: 0.85rem;

    margin-bottom: 2rem;
    box-shadow: var(--box-shadow);

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #mood-short-desc {
    padding: 0.2rem 0.75rem;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    outline: 0;
    border: 0;
    background-color: inherit;
    flex-grow: 1;
  }

  #mood-update-button {
    padding: 0.3rem;
    font-size: 1.5rem;

    background-color: #023e8a;
    color: white;
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  .moodmojis {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;

    li {
      position: relative;
      list-style: none;
      padding: 0.3rem;
      border-radius: 0.5rem;

      &.selected {
        background-color: #ade8f4;
      }

      &::after {
        content: attr(data-tooltip);
        display: inline-block;

        width: auto;
        height: 2rem;
        font-size: 0.85rem;
        font-family: var(--secondary-font);

        position: absolute;
        bottom: -80%;
        left: 50%;
        transform: translateX(-50%) scale(0);
        transition: transform 200ms ease-in-out;
      }

      &:hover::after,
      &:focus::after {
        transform: translateX(-50%) scale(1);
      }
    }
    .mood-moji {
      width: clamp(1.85rem, 5vw, 2.5rem);
      cursor: pointer;
    }
  }

  #mood-description {
    font-size: 1.2rem;
    padding: 0.3rem 0.75rem;
    border-radius: 0.5rem;

    border: 0;
    box-shadow: var(--box-shadow);

    max-height: 0;
    overflow: none;
    resize: none;
    opacity: 0;
    transition: all 200ms ease-in-out;

    &.show {
      max-height: 10rem;
      opacity: 1;
    }
  }
`;

const MoodForm = () => {
  const { authUser } = useContext(AuthContext);
  const [mood, setMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(5);
  const [code, setCode] = useState(null);
  const [moodMojiSrc, setMoodMojiSrc] = useState("");
  const [moodShortDesc, setMoodShortDesc] = useState("");
  const [moodLongDesc, setMoodLongDesc] = useState("");

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

  const submitMoodLog = (e) => {
    e.preventDefault();
    const currentMoodLog = {
      mood,
      code,
      moodShortDesc,
      moodLongDesc,
      moodMojiSrc,
      loggedAt: firebase.firestore.Timestamp.now(),
    };
    db.collection(`/users/${authUser.uid}/moodLogs`).add(currentMoodLog);
    setMoodShortDesc("");
    setMoodLongDesc("");
  };

  return (
    <StyledMoodForm onSubmit={(e) => submitMoodLog(e)}>
      <label id="greet">Hey there,</label>

      <section className="mood-input-section">
        <input
          type="text"
          id="mood-short-desc"
          placeholder="How's your mood today?"
          value={moodShortDesc}
          required
          onChange={(e) => setMoodShortDesc(e.target.value)}
        />
        <button type="submit" id="mood-update-button">
          <MdAdd />
        </button>
      </section>

      <div className="moodmojis">
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
      </div>

      <textarea
        name="mood-description"
        id="mood-description"
        cols="30"
        rows="5"
        placeholder="want to tell more?"
        className={moodShortDesc ? "show" : null}
        value={moodLongDesc}
        onChange={(e) => setMoodLongDesc(e.target.value)}
      ></textarea>
    </StyledMoodForm>
  );
};

export default MoodForm;
