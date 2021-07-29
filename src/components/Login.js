import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import jumping from "../images/open-doodles-jumping.svg";
import { FiChevronLeft } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import Toast from "./Toast";

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
    width: 18rem;
    font-size: 1.1rem;
    padding: 0.2rem 0.75rem;
    border: 0;
    border-radius: 0.5rem;
    border: 1px solid #a6a8a9;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, authUser } = useContext(AuthContext);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setPending(true);
      setError("");
      await login(email, password);
      history.push("/moodspace");
    } catch (err) {
      setError(err);
    }
    setPending(false);
  };

  if (!pending && authUser) {
    history.push("/moodspace");
  }

  return (
    <StyledLoginSection>
      {error && <Toast msg={error} />}
      <img src={jumping} alt="jumping doodle" id="jumping-doodle" />
      <h2>login to your mood</h2>
      <StyledLoginForm
        className="sign-up-form"
        onSubmit={(e) => handleLogin(e)}
      >
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
        <FiChevronLeft id="back-home-link" />
      </Link>
    </StyledLoginSection>
  );
};

export default Login;
