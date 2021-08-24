import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 0.3rem 0.85rem;
  border-radius: 500px;
  background-color: var(--accent-color);
  box-shadow: var(--box-shadow);
`;

const Logo = () => {
  return <StyledLogo>M:M</StyledLogo>;
};

export default Logo;
