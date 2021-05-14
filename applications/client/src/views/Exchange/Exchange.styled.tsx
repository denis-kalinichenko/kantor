import styled from "styled-components";
import {media} from "@bank/ui-library";

export const Widget = styled.div`
  @media (${media.desktop}) {
    max-width: 23rem;
    height: 35rem;
  }
`;

export const SuccessScreen = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5em;
  
  span {
    color: #7ac142;
    font-size: 1.4rem;
  }
`;
