import React from "react";
import { styled } from "styled-components";

const DisplayTextDiv = styled.div`
position: absolute;
color: white;
align-items: center;
justify-content: center;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: none;
`

export const DisplayText = () => {
  return (
    <DisplayTextDiv
      id="displayText"
    >
      <span>Tie</span>
    </DisplayTextDiv>
  );
};
