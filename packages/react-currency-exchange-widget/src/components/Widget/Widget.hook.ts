import {useState} from "react";
import {ICurrencyPair} from "../../types";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {IFieldProps} from "../Field/Field.types";

export const useWidget = (props: ICurrencyExchangeWidgetProps) => {
    const {currencies, accounts, defaultPair} = props;

    const [pair, setPair] = useState<ICurrencyPair>(defaultPair);

    const [isSwapped, setIsSwapped] = useState<boolean>(false);

    const swapPair = () => {
        setIsSwapped(prevState => !prevState);
        return setPair(prevState => ({
            from: prevState.to,
            to: prevState.from,
        }));
    };

    const setCurrencyFrom = (currencyCode: string): void => setPair(prevStatePair => {
        if (currencyCode === prevStatePair.to) {
            return {
                from: currencyCode,
                to: prevStatePair.from,
            };
        }

        return {
            from: currencyCode,
            to: prevStatePair.to,
        };
    });

    const setCurrencyTo = (currencyCode: string): void => setPair(prevStatePair => {
        if (currencyCode === prevStatePair.from) {
            return {
                from: prevStatePair.to,
                to: currencyCode,
            };
        }

        return {
            from: prevStatePair.from,
            to: currencyCode,
        };
    });

    const getFieldProps = (swap: boolean): IFieldProps => {
        return {
            currencies,
            currencyCode: !swap ? pair.from : pair.to,
            balance: !swap ? accounts[pair.from] : accounts[pair.to],
            positiveValue: swap,
            onCurrencyChange: newCurrencyCode => {
                if (!swap) {
                    return setCurrencyFrom(newCurrencyCode);
                }

                return setCurrencyTo(newCurrencyCode);
            },
        };
    };

    const getButtonLabel = (): string => {
        if (!isSwapped) {
            return `Sell ${pair.from} for ${pair.to}`;
        }
        return `Buy ${pair.to} with ${pair.from}`;
    };

    return {
        pair,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
    };
};
