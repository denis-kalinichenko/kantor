import React, {FC} from "react";
import { Wrapper, BackButton, Main } from "./Drawer.styled";

export const Drawer: FC = (): JSX.Element => (
    <Wrapper>
        <BackButton>Back Button</BackButton>
        <Main>Drawer</Main>
    </Wrapper>
);
