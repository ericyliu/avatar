import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled, { css } from 'styled-components';

const stateColors = {
  active: 'white',
  inactive: 'grey',
  lit: 'yellow',
};

export const Block = (props: {
  position:
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left'
    | 'top-left';
  state?: 'active' | 'inactive' | 'lit';
}) => {
  return (
    <BlockInner
      strokeWidth={3}
      value={100 / 10}
      position={props.position}
      styles={buildStyles({
        pathColor: stateColors[props.state || 'inactive'],
        trailColor: 'transparent',
      })}
    />
  );
};

const BlockInner = styled(CircularProgressbar)`
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  position: absolute;
  box-sizing: border-box;

  ${(props: {
    position:
      | 'top'
      | 'top-right'
      | 'right'
      | 'bottom-right'
      | 'bottom'
      | 'bottom-left'
      | 'left'
      | 'top-left';
  }) => {
    switch (props.position) {
      case 'top':
        return css`
          transform: rotate(-18deg);
        `;
      case 'top-right':
        return css`
          transform: rotate(27deg);
        `;
      case 'right':
        return css`
          transform: rotate(72deg);
        `;
      case 'bottom-right':
        return css`
          transform: rotate(117deg);
        `;
      case 'bottom':
        return css`
          transform: rotate(162deg);
        `;
      case 'bottom-left':
        return css`
          transform: rotate(207deg);
        `;
      case 'left':
        return css`
          transform: rotate(252deg);
        `;
      case 'top-left':
        return css`
          transform: rotate(297deg);
        `;
      default:
        return css`
          display: none;
        `;
    }
  }};
`;
