import React from "react";
import { styled } from "styled-components";

const EnemyHealthMainDiv = styled.div`
  position: relative;
  width: 100%;
  border-top: 4px solid white;
  border-right: 4px solid white;
  border-bottom: 4px solid white;
`;

const EnemyHealthBarBackground = styled.div`
  background-color: red;
  height: 30px;
`;

const EnemyHealthBarColor = styled.div`
  position: absolute;
  background: #818cf8;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const EnemyHealth = () => {
  return (
    <EnemyHealthMainDiv>
      <EnemyHealthBarBackground></EnemyHealthBarBackground>
      <EnemyHealthBarColor
        id="enemyHealth"
      ></EnemyHealthBarColor>
    </EnemyHealthMainDiv>
  );
};
