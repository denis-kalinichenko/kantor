import styled from "styled-components";
import {Palette} from "@bank/ui-library";

export const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Balance = styled.div`
  font-size: 1rem;
  color: ${Palette.textLight};
`;

export const Input = styled.input`
  border: none;
  text-align: right;
  -moz-appearance:textfield;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${Palette.textPrimary};
  width: 50%;
  outline: none;
  caret-color: ${Palette.primary};
  padding: 0.5rem 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  &::placeholder {
    color: ${Palette.textLight};
  }
`;
