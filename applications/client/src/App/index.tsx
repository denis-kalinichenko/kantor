import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {Drawer, Dashboard} from "../layouts";
import {Accounts, Exchange} from "../views";
import {GlobalStyle} from "@bank/ui-library";

export const App: FC = (): JSX.Element => (
    <>
        <GlobalStyle/>
        <Switch>
            <Route exact path="/accounts">
                <Dashboard>
                    <Accounts/>
                </Dashboard>
            </Route>
            <Route exact path="/accounts/exchange">
                <Drawer backRouterLink="/accounts">
                    <Exchange/>
                </Drawer>
            </Route>
            <Route path="/">
                <Redirect to="/accounts"/>
            </Route>
        </Switch>
    </>
);
