import styled, {keyframes} from "styled-components";
import {Button} from "../Button";
import {Palette} from "../Palette";
import {IDropdownMenuProps} from "./Dropdown.types";

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled(Button)`
  background-color: transparent;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${Palette.textPrimary};
  line-height: 1.5em;
  padding: 0 20px 0 0;
  position: relative;
  
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-right: 2px solid ${Palette.textPrimary};
    border-bottom: 2px solid ${Palette.textPrimary};
    transform: rotate(45deg);
    position: absolute;
    right: 0;
    top: 13px;
    border-radius: 1px;
  }
`;

const fadeIn = keyframes`
  from {
    transform: translateY(-5%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-5%);
    opacity: 0;
  }
`;

export const DropdownMenu = styled.div<IDropdownMenuProps>`
  visibility: ${props => props.isOpen ? "visible" : "hidden"};
  z-index: 1;
  position: absolute;
  top: 100%;
  left: -5%;
  background-color: ${Palette.cardBg};
  border-radius: 8px;
  min-width: 200px;
  transition: visibility .2s linear;
  animation: ${props => props.isOpen ? fadeIn : fadeOut} .2s linear;
  box-shadow:
          0 5px 14px rgb(150 150 150 / 12%),
          0 5px 14px 0 rgb(150 150 150 / 24%);
  overflow: hidden;
`;

export const DropdownMenuOption = styled.a`
  font-size: 1rem;
  cursor: pointer;
  padding: 1em 1.5em;
  transition: background-color .2s;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background-color: ${Palette.dashboardBg};
  }
  
  span {
    color: ${Palette.textLight};
  }
`;
