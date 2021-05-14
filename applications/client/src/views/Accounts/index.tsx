import React, {FC, useContext} from "react";
import {Heading1, ActionButton} from "@bank/ui-library";
import {Wrapper, Buttons, List, Account, AccountName, AccountBalance} from "./Accounts.styled";
import {useHistory} from "react-router-dom";
import {GlobalStore} from "../../state/Provider";
import {formatCurrency} from "@bank/react-currency-exchange-widget";

export const Accounts: FC = (): JSX.Element => {
    const { state: { user, currencies } } = useContext(GlobalStore);
    const history = useHistory();

    return (
        <Wrapper>
            <Heading1>${2.84.toLocaleString()}</Heading1>
            <div>All accounts balance in USD</div>
            <Buttons>
                <ActionButton>&#65291; Add money</ActionButton>
                <ActionButton>&#10142; Send</ActionButton>
                <ActionButton onClick={() => history.push("/accounts/exchange")}>&#10561; Exchange</ActionButton>
            </Buttons>

            <List>
                {Object.keys(user.accounts).map(code => (
                    <Account key={code}>
                        <AccountName>{currencies[code].name}</AccountName>
                        <span>{currencies[code].code}</span>
                        <AccountBalance>
                            {currencies[code].symbol}{formatCurrency(user.accounts[code])}
                        </AccountBalance>
                    </Account>
                ))}
            </List>
        </Wrapper>
    );
}
