import React, {FC, useContext, useState, useEffect} from "react";
import {Widget, SuccessScreen, SuccessMessage} from "./Exchange.styled";
import CurrencyExchangeWidget, {IExchangeData, formatCurrency} from "@bank/react-currency-exchange-widget";
import {GlobalStore} from "../../state/Provider";
import {userActionTypes} from "../../state/reducers/user.reducer";
import {useHistory} from "react-router-dom";
import {AnimatedCheckmark} from "./components/AnimatedCheckmark";

export const Exchange: FC = (): JSX.Element => {
    const { state: { user, currencies }, dispatch } = useContext(GlobalStore);
    const [exchangedCurrency, setExchangedCurrency] = useState<IExchangeData>();
    const history = useHistory();

    useEffect(() => {
        if (exchangedCurrency) {
            const timer = setTimeout(() => {
                history.push("/accounts");
            },  3000);
            return () => clearTimeout(timer);
        }
    }, [exchangedCurrency, history]);

    const handleExchange = (values: IExchangeData) => {
        dispatch({ type: userActionTypes.EXCHANGE, payload: values});
        setExchangedCurrency(values);
    };

    if (exchangedCurrency) {
        const { from, to } = exchangedCurrency;

        return (
            <SuccessScreen>
                <AnimatedCheckmark/>
                <SuccessMessage>You exchanged<br/>
                    <span>{formatCurrency(to.value)} {to.code} from {formatCurrency(from.value)} {from.code}</span>
                </SuccessMessage>
            </SuccessScreen>
        );
    }

    return (
        <Widget>
            <CurrencyExchangeWidget
                accounts={user.accounts}
                currencies={currencies}
                defaultPair={{
                    from: "USD",
                    to: "EUR"
                }}
                onExchange={handleExchange}
            />
        </Widget>
    );
};
