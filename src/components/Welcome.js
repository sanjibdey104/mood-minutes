import React, { useContext } from "react";
import styled from "styled-components";
import swinging from "../images/open-doodles-swinging.svg";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { SiGoogle } from "react-icons/si";

const StyledWelcomeSection = styled.section`
  width: 80%;
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
  #to-signup,
  #google-auth-signin {
    padding: 0.5rem;
    width: 6rem;
    font-size: 1rem;
    background-color: var(--accent-color);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
  }

  #google-auth-signin {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  #cover-art {
    width: clamp(12rem, 15vw, 25rem);
    margin: 0 auto;
  }
`;

const Welcome = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const history = useHistory();

  const handleGoogleSignin = async () => {
    await signInWithGoogle();
    history.push("/moodspace");
  };

  return (
    <StyledWelcomeSection>
      <img src={swinging} alt="relaxed doodle" id="cover-art" />
      <div className="greet">
        <h2>Welcome to Mood Minutes</h2>
        <p>Mood, swings. Let's observe it. Take some notes.</p>
      </div>
      <div className="cta">
        <Link to="/login">
          <button id="to-login">Login</button>
        </Link>
        <Link to="/signup">
          <button id="to-signup">Sign Up</button>
        </Link>
      </div>
      <button id="google-auth-signin" onClick={() => handleGoogleSignin()}>
        <SiGoogle /> Continue with Google
      </button>
    </StyledWelcomeSection>
  );
};

export default Welcome;
