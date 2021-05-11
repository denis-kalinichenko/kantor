import styled, {css} from "styled-components";
import {Palette, media} from "@bank/ui-library";
import {INavItemPlaceholderProps} from "./Dashboard.types";

export const Wrapper = styled.div`
  background-color: ${Palette.dashboardBg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (${media.desktop}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  @media (${media.desktop}) {
    width: 20%; 
  }
`;

export const Header = styled.header`
  padding: 1rem;

  img {
    display: block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

export const UserFullName = styled.div`
  display: none;
  
  @media (${media.desktop}) {
    display: block;
    font-weight: 300;
    margin: 10px 0;
    font-size: 1.0rem;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (${media.desktop}) {
    display: block;
    padding: 20px;
  }
`;

export const NavItemPlaceholder = styled.div<INavItemPlaceholderProps>`
  border-radius: 3px;
  height: 20px;
  margin: 20px 0;
  background-color: ${Palette.icon};
  opacity: 0.2;
  
  ${props => props.width && css`
    width: ${props.width}%;
  `}
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;

  @media (${media.desktop}) {
    width: 80%;
  }
`;

export const MainContainer = styled.div`
  margin: 0 1rem;
  width: 100%;

  @media (${media.desktop}) {
    max-width: 64rem;
  }
`;
