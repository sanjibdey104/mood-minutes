import React, { useContext, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import ballet from "../../assets/open-doodles-ballet.svg";
import Toast from "../Toast";

const StyledSignUpSection = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;

  #ballet-doodle {
    width: clamp(12rem, 15vw, 25rem);
    color: white;
  }

  h2 {
    font-size: 1.5rem;
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
    width: 18rem;
    font-size: 1.1rem;
    padding: 0.2rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #a6a8a9;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const { signup, authUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("passwords did not match");
    }

    try {
      setError("");
      setPending(true);
      await signup(email, password);
      history.push("/moodspace");
    } catch (err) {
      setError(err);
    }
    setPending(false);
  };

  if (authUser) {
    history.push("/moodspace");
  }

  return (
    <StyledSignUpSection>
      {error && <Toast msg={error.message} />}
      <img src={ballet} alt="ballet doodle" id="ballet-doodle" />
      <h2>sign up your mood</h2>
      <StyledSignUpForm
        className="sign-up-form"
        onSubmit={(e) => handleSignup(e)}
      >
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
          placeholder="repeat that password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          autoComplete="off"
          required
        />
        <button disabled={pending} type="submit" id="signup-button">
          sign up
        </button>
      </StyledSignUpForm>

      <Link to="/">
        <FiChevronLeft id="back-home-link" />
      </Link>
    </StyledSignUpSection>
  );
};

export default SignUp;
