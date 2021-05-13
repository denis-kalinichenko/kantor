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

export const Error = styled.span`
  color: ${Palette.error};
  font-size: 0.8rem;
`;

export const InputWrapper = styled.div`
  width: 60%;
  text-align: right;
`;

export const Input = styled.input`
  border: none;
  text-align: right;
  -moz-appearance:textfield;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${Palette.textPrimary};
  outline: none;
  caret-color: ${Palette.primary};
  padding: 0.4rem 0;
  display: block;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  &::placeholder {
    color: ${Palette.textLight};
  }
`;
