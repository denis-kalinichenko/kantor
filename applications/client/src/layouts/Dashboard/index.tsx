import React, {FC, useContext} from "react";
import {Wrapper, Nav, Main, Sidebar, Header, UserFullName, NavItemPlaceholder, MainContainer} from "./Dashboard.styled";
import userpic from "./userpic.webp";
import {GlobalStore} from "../../state/Provider";

export const Dashboard: FC = ({ children }): JSX.Element => {
    const { state } = useContext(GlobalStore);

    return (
        <Wrapper>
            <Sidebar>
                <Header>
                    <img src={userpic} alt={state.user.firstName + " " + state.user.lastName}/>
                    <UserFullName>{state.user.firstName + " " + state.user.lastName}</UserFullName>
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
};
