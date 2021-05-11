import styled from "styled-components";
import {Palette} from "../Palette";

export const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 
          0 1px 4px rgb(150 150 150 / 10%), 
          0 1px 4px 0 rgb(150 150 150 / 22%);
  background-color: ${Palette.cardBg};
  box-sizing: border-box;
  transition: box-shadow .2s;
  
  &:hover {
    box-shadow:
            0 5px 14px rgb(150 150 150 / 8%),
            0 5px 14px 0 rgb(150 150 150 / 20%);
  }
`;
