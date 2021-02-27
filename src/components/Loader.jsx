import React from "react";
import styled, { keyframes } from "styled-components";

const Cercle = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
    width: 50px;
    height: 50px;

    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
    :nth-child(1) {
      border: 3px solid red;
      animation: ${Cercle} 1s ease-in-out infinite;
    }
    :nth-child(2) {
      border: 3px solid yellow;
      animation: ${Cercle} 2s ease-in-out infinite;
    }
    :nth-child(3) {
      border: 3px solid #fff;
      animation: ${Cercle} 3s ease-in-out infinite;
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Loader;
