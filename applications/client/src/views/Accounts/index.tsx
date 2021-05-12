import React, {FC} from "react";
import {Heading1, ActionButton} from "@bank/ui-library";
import {Wrapper, Buttons, List, Account, AccountName, AccountBalance} from "./Accounts.styled";
import {useHistory} from "react-router-dom";

export const Accounts: FC = (): JSX.Element => {
    const history = useHistory();

    return (
        <Wrapper>
            <Heading1>$2.84</Heading1>
            <div>All accounts balance in USD</div>
            <Buttons>
                <ActionButton>&#65291; Add money</ActionButton>
                <ActionButton>&#10142; Send</ActionButton>
                <ActionButton onClick={() => history.push("/accounts/exchange")}>&#10561; Exchange</ActionButton>
            </Buttons>

            <List>
                <Account>
                    <AccountName>United States dollar</AccountName>
                    <span>PLN</span>
                    <AccountBalance>$0.00</AccountBalance>
                </Account>
                <Account>
                    <AccountName>Euro</AccountName>
                    <span>EUR</span>
                    <AccountBalance>€0.00</AccountBalance>
                </Account>
                <Account>
                    <AccountName>British Pound</AccountName>
                    <span>GBP</span>
                    <AccountBalance>£0.00</AccountBalance>
                </Account>
            </List>
        </Wrapper>
    );
}
