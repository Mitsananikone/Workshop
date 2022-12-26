import React from "react";
import styled from "styled-components";
 
 
const ButtonStyles = styled.button` 
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 0;
    padding-inline: 1.75rem;
    padding-block: .75rem;
    background-color: springGreen;
    color: white;
`;
 
const StyledButton = () => {
  return (
    <ButtonStyles> ## Now, our styles will get applied.
      Hello World!
    </ButtonStyles>
  );
}

export default StyledButton;