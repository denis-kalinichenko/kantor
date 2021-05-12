import React, {FC} from "react";
import {useHistory} from "react-router-dom";
import {BackButton} from "@bank/ui-library";
import {Header, Main} from "./Drawer.styled";
import {IDrawerProps} from "./Drawer.types";

export const Drawer: FC<IDrawerProps> = ({ children, backRouterLink }): JSX.Element => {
    const history = useHistory();

    return (
        <div>
            <Header>
                <BackButton onClick={() => history.push(backRouterLink)}>{`<`}</BackButton>
            </Header>
            <Main>
                {children}
            </Main>
        </div>
    );
}
