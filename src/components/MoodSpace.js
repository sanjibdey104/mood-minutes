import dayjs from "dayjs";
import styled from "styled-components";
import firebase from "firebase/app";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdAdd } from "react-icons/md";

// importing emoji images
import cool from "../images/emojis/cool.png";
import sad from "../images/emojis/sad.png";
import happy from "../images/emojis/happy.png";
import nervous from "../images/emojis/nervous.png";
import neutral from "../images/emojis/neutral.png";
import angry from "../images/emojis/angry.png";
import confused from "../images/emojis/confused.png";
import { db } from "../firebase/initFirebase";

const StyledMoodSpace = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

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

const MoodForm = styled.form`
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
    width: 100%;
    border: 1px solid black;
    border-radius: 10rem;
    padding: 0.85rem 1rem;
    overflow: hidden;

    @media (max-width: 600px) {
      padding: 1rem 0;
    }

    box-shadow: 3px 3px #000;
    margin-bottom: 2rem;
    background-color: #f8f9fa;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #mood-input {
    padding: 0.2rem 0.75rem;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    outline: 0;
    border: 0;
    background-color: inherit;
  }

  #mood-update-button {
    padding: 0.3rem;
    font-size: 1.5rem;

    background-color: var(--accent-color);
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
    margin-bottom: 2rem;

    li {
      list-style: none;
      position: relative;

      &::after {
        content: attr(data-tooltip);
        display: inline-block;

        width: auto;
        height: 2rem;
        font-size: 0.85rem;
        font-weight: bolder;

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
    border: 0;
    transform: scaleY(0);
    transition: transform 200ms ease-in-out;

    &.show {
      transform: scaleY(1);
    }
  }
`;

const MoodSpace = () => {
  const { logout, authUser } = useContext(AuthContext);
  const { uid } = authUser;

  const history = useHistory();
  const [moodInput, setMoodInput] = useState("");
  const [moodMoji, setMoodMoji] = useState("");
  const [moodDescription, setMoodDescription] = useState("");

  const dt = new Date();
  const today = dayjs(dt).format("ddd, MMM DD");
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

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  const submitMoodLog = (e) => {
    e.preventDefault();
    const currentMoodLog = {
      moodInput,
      moodMoji,
      moodDescription,
      loggedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection(`users/${uid}/moodLogs`).add(currentMoodLog);
    setMoodInput("");
    setMoodDescription("");
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

      <MoodForm onSubmit={(e) => submitMoodLog(e)}>
        <label id="greet">Hey there,</label>

        <section className="mood-input-section">
          <input
            type="text"
            id="mood-input"
            placeholder="How's your mood today?"
            value={moodInput}
            required
            onChange={(e) => setMoodInput(e.target.value)}
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
              onClick={() => setMoodMoji(mood)}
            >
              <img
                src={src}
                alt="emoji face"
                key={mood}
                id={mood}
                className="mood-moji"
              />
            </li>
          ))}
        </div>

        <textarea
          name="mood-description"
          id="mood-description"
          cols="30"
          rows="5"
          placeholder="want to tell more?"
          className={moodInput ? "show" : null}
          value={moodDescription}
          onChange={(e) => setMoodDescription(e.target.value)}
        ></textarea>
      </MoodForm>
    </StyledMoodSpace>
  );
};

export default MoodSpace;
