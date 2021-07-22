import dayjs from "dayjs";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;

  #time {
    font-size: 1.1rem;
  }

  #logout-button {
    padding: 0.3rem;
    width: 4.5rem;
  }
`;

const Header = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const dt = new Date();
  const today = dayjs(dt).format("ddd, MMM DD");

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  return (
    <StyledHeader>
      <Logo />
      <p id="time">{today}</p>
      <button id="logout-button" onClick={() => handleLogout()}>
        log out
      </button>
    </StyledHeader>
  );
};

export default Header;
