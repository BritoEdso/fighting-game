import React from "react";
import { styled } from "styled-components";

const RestartBtn = styled.button`
  display: none;
`;

export const Restart = () => {
  return (
    <RestartBtn id="restart" onclick="">
      RESTART
    </RestartBtn>
  );
};
