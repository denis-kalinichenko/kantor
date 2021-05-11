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
  padding: 0.45rem 1.5rem;
  font-size: 1rem;
  transition: background-color .2s;
  
  &:hover {
    background-color: ${Palette.primaryLight};
  }
`;
