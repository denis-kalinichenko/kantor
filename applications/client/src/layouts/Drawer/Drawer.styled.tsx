import styled from "styled-components";
import {media} from "@bank/ui-library";

export const Header = styled.div`
  padding: 1rem 1rem 0;
  
  @media (${media.desktop}) {
    padding: 2rem 4rem 1rem;
  }
`;

export const Main = styled.main`
  margin: 2rem;
  
  @media (${media.desktop}) {
    margin: 0 0 0 20%;
    width: 80%;
  }
`;
