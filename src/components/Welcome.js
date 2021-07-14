import React from "react";
import styled from "styled-components";
import relaxed from "../images/relaxed.png";
import swinging from "../images/open-doodles-swinging.svg";

const StyledWelcomeSection = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .greet {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.85rem;
  }

  p {
    font-size: 1.2rem;
  }

  .cta {
    display: flex;
    gap: 3rem;
  }

  #to-login,
  #to-signup {
    padding: 0.5rem;
    width: 6rem;
    font-size: 1rem;
    background-color: var(--accent-color);
    border-radius: 0.5rem;
    box-shadow: 3px 3px #000;
    transition: all 200ms ease-in-out;

    &:hover {
      box-shadow: 2px 2px #000;
    }
  }

  #cover-art {
    width: clamp(12rem, 15vw, 30rem);
    margin: 0 auto;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcomeSection>
      <img src={swinging} alt="relaxed girl" id="cover-art" />
      <div className="greet">
        <h2>Welcome to Mood Minutes</h2>
        <p>Mood, swings. Let's observe it. Take some notes.</p>
      </div>
      <div className="cta">
        <button id="to-login">Login</button>
        <button id="to-signup">Sign Up</button>
      </div>
    </StyledWelcomeSection>
  );
};

export default Welcome;
