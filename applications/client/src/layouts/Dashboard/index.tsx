import React, { FC } from "react";
import {Wrapper, Nav, Main, Sidebar, Header, UserFullName, NavItemPlaceholder, MainContainer} from "./Dashboard.styled";
import userpic from "./userpic.webp";

export const Dashboard: FC = ({ children }): JSX.Element => (
    <Wrapper>
        <Sidebar>
            <Header>
                <img src={userpic} alt="Denys Kalinichenko"/>
                <UserFullName>Denys Kalinichenko</UserFullName>
            </Header>
            <Nav>
                <NavItemPlaceholder/>
                <NavItemPlaceholder width={70}/>
                <NavItemPlaceholder width={85}/>
                <NavItemPlaceholder width={50}/>
            </Nav>
        </Sidebar>
        <Main>
            <MainContainer>
                {children}
            </MainContainer>
        </Main>
    </Wrapper>
);
