import React from "react";
import { styled } from "styled-components";

const StartBtn = styled.button`
  display: none;
`;

export const ReadyBar = () => {
  return (
      <div id="readyBar" class="anim">
        <div id="readyPlayerOne">Ready?</div>
        <div id="readyEnemyOne">Ready?</div>
        <StartBtn id="startGame" onclick="">
          START
        </StartBtn>
        <div id="notReady">Players Not Ready</div>
      </div>
  );
};
