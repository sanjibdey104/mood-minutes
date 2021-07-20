import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import { db } from "../firebase/initFirebase";
import { MdAdd } from "react-icons/md";
import MoodMojis from "./MoodMojis";
import styled from "styled-components";

const StyledMoodForm = styled.form`
  min-width: 50%;
  max-width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  #greet {
    font-size: 1.2rem;
    margin-bottom: -2rem;
  }

  .mood-input-section {
    border-radius: 10rem;
    padding: 0.85rem;
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
  const [code, setCode] = useState(null);
  const [moodMojiSrc, setMoodMojiSrc] = useState("");
  const [moodShortDesc, setMoodShortDesc] = useState("");
  const [moodLongDesc, setMoodLongDesc] = useState("");

  const moodMethods = { setMood, setCode, setMoodMojiSrc };

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

      <MoodMojis moodMethods={moodMethods} />

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
