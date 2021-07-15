import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdError } from "react-icons/md";

const StyledToast = styled.div`
  width: 15rem;
  height: 2rem;

  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const removeListener = setTimeout(() => {
      setAnimate(false);
    }, 3000);
    return () => removeListener();
  }, []);

  return (
    <StyledToast id={animate ? "show-toast" : null}>
      <MdError id="error-icon" />
      <p>{msg}</p>
    </StyledToast>
  );
};

export default Toast;
