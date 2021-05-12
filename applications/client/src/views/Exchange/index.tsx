import React, { FC } from "react";
import {Widget} from "./Exchange.styled";
import CurrencyExchangeWidget from "@bank/react-currency-exchange-widget";

const currencies = {
    USD: {
        symbol: "$",
        name: "US Dollar",
        code: "USD",
    },
    EUR: {
        symbol: "€",
        name: "Euro",
        code: "EUR",
    },
    GBP: {
        symbol: "£",
        name: "British Pound",
        code: "GBP",
    },
};

export const Exchange: FC = (): JSX.Element => {
    return (
        <Widget>
            <CurrencyExchangeWidget
                accounts={{
                    USD: 10.0,
                    EUR: 101,
                    GBP: 0.11
                }}
                currencies={currencies}
            />
        </Widget>
    );
};
