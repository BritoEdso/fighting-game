import React from "react";
import { styled } from "styled-components";

const TimerDiv = styled.div`
  background-color: black;
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 4px solid white;
`;

export const Timer = () => {
  return <TimerDiv id="timer">60</TimerDiv>;
};
