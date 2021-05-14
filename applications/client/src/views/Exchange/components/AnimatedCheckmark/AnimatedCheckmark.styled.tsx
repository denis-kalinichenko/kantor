import styled, {keyframes} from "styled-components";

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

export const fill = keyframes`
  100% {
    box-shadow: inset 0 0 0 60px #7ac142;
  }
`;

export const Checkmark = styled.svg`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0 0 0 #7ac142;
  animation: ${fill} .4s ease-in-out .4s forwards, ${scale} .3s ease-in-out .9s both;
`;

export const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 96;
  stroke-dashoffset: 96;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;
