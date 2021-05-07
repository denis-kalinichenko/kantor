import React, { FC } from "react";
import { Wrapper, Nav, Main } from "./Dashboard.styled";

export const Dashboard: FC = ({ children }): JSX.Element => (
    <Wrapper>
        <Nav>
            nav
        </Nav>
        <Main>
            {children}
        </Main>
    </Wrapper>
);
