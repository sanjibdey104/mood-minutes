import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jumping from "../images/open-doodles-jumping.svg";
import { FiArrowLeftCircle } from "react-icons/fi";

const StyledLoginSection = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;

  #jumping-doodle {
    width: clamp(12rem, 15vw, 25rem);
  }

  h2 {
    font-size: 1.5rem;
  }

  a {
    color: tomato;
  }
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  input {
    font-size: 1.1rem;
    padding: 0.2rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid black;
  }

  #login-button {
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
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledLoginSection>
      <h2>login to your mood</h2>
      <img src={jumping} alt="jumping doodle" id="jumping-doodle" />
      <StyledLoginForm className="sign-up-form">
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        <button type="submit" id="login-button">
          login
        </button>
      </StyledLoginForm>
      <Link to="/">
        <FiArrowLeftCircle id="back-home-link" />
      </Link>
    </StyledLoginSection>
  );
};

export default Login;
