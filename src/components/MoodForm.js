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
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(0, 0, 0, 0.2);

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
      list-style: none;
      position: relative;

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
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.2);

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
  const [moodMojiSrc, setMoodMojiSrc] = useState("");
  const [moodShortDesc, setMoodShortDesc] = useState("");
  const [moodLongDesc, setMoodLongDesc] = useState("");

  const moodMojis = [
    {
      mood: "happy",
      src: happy,
    },
    {
      mood: "neutral",
      src: neutral,
    },
    {
      mood: "sad",
      src: sad,
    },
    {
      mood: "angry",
      src: angry,
    },
    {
      mood: "confused",
      src: confused,
    },
    {
      mood: "cool",
      src: cool,
    },
    {
      mood: "nervous",
      src: nervous,
    },
  ];

  const handleMood = (mood, src) => {
    setMood(mood);
    setMoodMojiSrc(src);
  };

  const submitMoodLog = (e) => {
    e.preventDefault();
    const currentMoodLog = {
      mood,
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
        {moodMojis.map(({ mood, src }) => (
          <li
            className="emoji-face"
            data-tooltip={mood}
            onClick={() => handleMood(mood, src)}
            key={mood}
          >
            <img src={src} alt="emoji face" id={mood} className="mood-moji" />
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
