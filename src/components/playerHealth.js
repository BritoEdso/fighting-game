import React from "react";
import { styled } from "styled-components";

const PlayerHealthDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top: 4px solid white;
  border-left: 4px solid white;
  border-bottom: 4px solid white;
`;

const PlayerHealthBarBackgroundColor = styled.div`
  background-color: red;
  height: 30px;
  width: 100%;
`;

const PlayerHealthBarColor = styled.div`
  position: absolute;
  background: #818cf8;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

export const PlayerHealth = () => {
  return (
    <PlayerHealthDiv>
      <PlayerHealthBarBackgroundColor></PlayerHealthBarBackgroundColor>
      <PlayerHealthBarColor id="playerHealth"></PlayerHealthBarColor>
    </PlayerHealthDiv>
  );
};
