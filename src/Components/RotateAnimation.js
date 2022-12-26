import React from "react";
import styled, { keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  animation: ${rotate} 8s linear infinite;
  padding: 2rem 1rem;
  font-size: 20.2rem;
 
`;

const RotateItem = () => {
    return (
      <Rotate>
      MIT
      </Rotate>
    );
  }

  export default RotateItem;

