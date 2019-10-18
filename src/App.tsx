import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Block } from './Block';

const App = () => {
  return (
    <Container>
      <EnemyInfo>
        <HealthBarContainer>
          <HealthBar />
        </HealthBarContainer>
        <Name top>Aykittin</Name>
      </EnemyInfo>
      <GameContainer>
        <Turn>Attack</Turn>
        <TurnProgress
          value={50}
          strokeWidth={3}
          styles={buildStyles({
            pathColor: 'white',
            trailColor: 'transparent',
          })}
        />
        <Slash orientation="vertical" />
        <Slash orientation="horizontal" />
        <Slash orientation="diagonal1" />
        <Slash orientation="diagonal2" />
        <Stab />
        <Block state="active" position="top" />
        <Block state="lit" position="top-right" />
        <Block position="right" />
        <Block position="bottom-right" />
        <Block position="bottom" />
        <Block position="bottom-left" />
        <Block position="left" />
        <Block position="top-left" />
      </GameContainer>
      <OwnInfo>
        <Name>Eru</Name>
        <HealthBarContainer>
          <HealthBar />
        </HealthBarContainer>
      </OwnInfo>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-family: monospace;
`;

const GameContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

const Turn = styled.div`
  position: absolute;
  top: -60px;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 30px;
`;

const TurnProgress = styled(CircularProgressbar)`
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
`;

const Slash = styled.div`
  width: 6px;
  height: 70%;
  position: absolute;
  background-color: white;
  left: calc(50% - 3px);
  top: 15%;

  ${(props: {
    orientation: 'horizontal' | 'vertical' | 'diagonal1' | 'diagonal2';
  }) => {
    switch (props.orientation) {
      case 'horizontal':
        return css`
          transform: rotate(90deg);
        `;
      case 'diagonal1':
        return css`
          transform: rotate(45deg);
        `;
      case 'diagonal2':
        return css`
          transform: rotate(135deg);
        `;
      default:
        return css``;
    }
  }};
`;

const Stab = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border: 10px solid black;
  background-color: white;
  border-radius: 100%;
  box-sizing: border-box;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
`;

const EnemyInfo = styled(Info)`
  top: 0;
`;

const OwnInfo = styled(Info)`
  bottom: 0;
`;

const HealthBarContainer = styled.div`
  width: 100%;
  height: 35px;
  background-color: white;
`;

const HealthBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Name = styled.div`
  margin: 15px 0;
  color: white;
  width: 100%;
  font-size: 20px;

  ${(props: { top?: boolean }) =>
    props.top &&
    css`
      text-align: right;
    `}
`;

export default App;
