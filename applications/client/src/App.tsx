import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Drawer, Dashboard } from "./layouts";
import { Accounts, Convert } from "./views";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.body}>
        <Switch>
            <Route exact path="/accounts" >
                <Dashboard>
                    <Accounts/>
                </Dashboard>
            </Route>
            <Route exact path="/accounts/convert" >
                <Drawer>
                    <Convert/>
                </Drawer>
            </Route>
            <Route path="/">
                <Redirect to="/accounts" />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
