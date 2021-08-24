import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdError } from "react-icons/md";

const StyledToast = styled.div`
  width: 15rem;
  height: fit-content;

  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  box-shadow: 2px 2px #000;
  border: 1px solid #000;

  position: fixed;
  top: 2rem;
  right: 2rem;

  #error-icon {
    color: var(--code-red);
    font-size: 1.5rem;
  }

  transform: translateX(120%);
  transition: transform 200ms ease-in-out;

  &#show-toast {
    transform: translateX(0);
  }
`;

const Toast = ({ msg }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const toastTimeout = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => {
      clearTimeout(toastTimeout);
    };
  }, []);

  return (
    <StyledToast id={showToast ? "show-toast" : null}>
      <MdError id="error-icon" />
      <p>{msg}</p>
    </StyledToast>
  );
};

export default Toast;
