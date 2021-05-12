import styled from "styled-components";
import {Palette, Button, media} from "@bank/ui-library";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const MarketRate = styled.div`
  color: ${Palette.primary};
  font-size: 1rem;
  font-weight: 500;
  
  @media (${media.desktop}) {
    margin-bottom: 3rem;
  }
`;

export const ToggleDisplayModeButtonWrapper = styled.div`
  text-align: center;
`;

export const ToggleDisplayModeButton = styled(Button)`
  background-color: ${Palette.dashboardBg};
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  color: ${Palette.text};
  text-align: center;
`;
