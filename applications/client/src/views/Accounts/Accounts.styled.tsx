import styled from "styled-components";
import {Palette, ActionButton, Card, media} from "@bank/ui-library";

export const Wrapper = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: ${Palette.text};
`;

export const Buttons = styled.div`
  margin: 2rem 0;
  
  ${ActionButton} {
    margin: 0 0.5em 0.5em 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (${media.desktop}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Account = styled(Card)`
  padding: 2rem;
  flex: 0 0 calc(50% - 0.6rem);
  margin: 0.6rem 0;
  
  span {
    font-size: 0.9rem;
  }
`;

export const AccountName = styled.div`
  font-weight: 400;
  color: ${Palette.textPrimary};
  margin-bottom: 0.5em;
`;

export const AccountBalance = styled.div`
  font-weight: 600;
  color: ${Palette.textPrimary};
  font-size: 1.6rem;
  margin-top: 2em;
`;


