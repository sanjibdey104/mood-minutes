import React, { useState } from "react";
import styled from "styled-components";

const StyledLoginSection = styled.section`
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

const StyledLoginForm = styled.form`
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledLoginSection>
      <h2>login to your mood</h2>
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
        <button type="submit" id="sign-up-button">
          login
        </button>
      </StyledLoginForm>
    </StyledLoginSection>
  );
};

export default Login;
