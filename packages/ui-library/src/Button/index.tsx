import styled from "styled-components";
import {Palette} from "../Palette";

export const Button = styled.button`
  border: none;
  cursor: pointer;
`;

export const ActionButton = styled(Button)`
  background-color: ${Palette.primaryLighter};
  border-radius: 8px;
  color: ${Palette.primary};
  font-weight: 500;
  padding: 0 1.5rem;
  height: 2rem;
  font-size: 1rem;
  transition: background-color .2s;
  
  &:hover {
    background-color: ${Palette.primaryLight};
  }
`;

export const BackButton = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
  background-color: transparent;
  border: 1px solid ${Palette.border};
  border-radius: 1rem;
  
  &:active {
    border-color: ${Palette.primary};
  }
`;

export const PrimaryButton = styled(Button)`
  width: 100%;
  background-color: ${Palette.primary};
  color: #fff;
  border-radius: 1rem;
  height: 3.5rem;
  font-size: 1rem;
  transition: background-color .2s;
  
  &:hover {
    background-color: ${Palette.primaryDark};
  }
`;
