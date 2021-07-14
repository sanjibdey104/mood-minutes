import React, { useState } from "react";
import styled from "styled-components";

const StyledSignUpSection = styled.section`
  width: 25rem;
  margin: 0 auto;
  height: 20rem;
  border-radius: 1rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;

  h2 {
    font-size: 2.2rem;
  }

  a {
    color: tomato;
  }
`;

const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    font-size: 1.1rem;
    padding: 0.2rem 0.75rem;
    border-radius: 0.5rem;
    font-family: inherit;
    border: 1px solid black;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <StyledSignUpSection>
      <h2>sign up your mood</h2>
      <StyledSignUpForm className="sign-up-form">
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="set a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        <input
          type="password"
          placeholder="repeat password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          autoComplete="off"
          required
        />
        <button type="submit" id="sign-up-button">
          sign up
        </button>
      </StyledSignUpForm>
    </StyledSignUpSection>
  );
};

export default SignUp;
