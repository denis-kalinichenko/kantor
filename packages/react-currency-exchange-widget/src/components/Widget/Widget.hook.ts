import React, {useEffect, useState} from "react";
import {ICurrencyPair, ICurrencyPairValues, ValueType} from "../../types";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {IFieldProps} from "../Field/Field.types";
import {convert} from "exchange-rates-api";
import {calculate} from "../../utils";

export const useWidget = (props: ICurrencyExchangeWidgetProps) => {
    const {currencies, accounts, defaultPair, onExchange} = props;

    const [pair, setPair] = useState<ICurrencyPair>(defaultPair);
    const [pairValues, setPairValues] = useState<ICurrencyPairValues>({});
    const [isSwapped, setIsSwapped] = useState<boolean>(false);
    const [rate, setRate] = useState<number>(0);

    const isDirty: boolean = (!pairValues.from || !pairValues.to) || pairValues.from > accounts[pair.from];

    const fetchRate = async () => {
        const amount = await convert(1, pair.from, pair.to, "latest");
        setRate(amount);
    };

    useEffect(() => {
        fetchRate();
        const interval = setInterval(fetchRate, 10000);
        return () => clearInterval(interval);
    }, [pair]);

    const swapPair = () => {
        setIsSwapped(prevState => !prevState);
        handleValueChange(ValueType.from, pairValues[ValueType.from]);
        return setPair(prevState => ({
            from: prevState.to,
            to: prevState.from,
        }));
    };

    const setCurrencyFrom = (currencyCode: string): void => setPair(prevStatePair => {
        if (currencyCode === prevStatePair.to) {
            setPairValues(prevState => ({
                from: prevState.to,
                to: prevState.from,
            }));
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
            setPairValues(prevState => ({
                from: prevState.to,
                to: prevState.from,
            }));
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

    const handleValueChange = (type: ValueType, value?: number) => {
        switch (type) {
            case ValueType.from:
                return setPairValues({
                    from: value,
                    to: calculate(rate, "multiply", value),
                });
            case ValueType.to:
                return setPairValues({
                    to: value,
                    from: calculate(rate,"divide", value),
                });
        }
    };

    const getFieldProps = (swap: boolean): IFieldProps => {
        if (!swap) {
            return {
                currencies,
                currencyCode: pair.from,
                balance: accounts[pair.from],
                value: pairValues.from,
                positiveValue: false,
                onCurrencyChange: setCurrencyFrom,
                onValueChange: newValue => handleValueChange(ValueType.from, newValue),
            };
        }

        return {
            currencies,
            currencyCode: pair.to,
            balance: accounts[pair.to],
            positiveValue: true,
            value: pairValues.to,
            onCurrencyChange: setCurrencyTo,
            onValueChange: newValue => handleValueChange(ValueType.to, newValue),
        };
    };

    const getButtonLabel = (): string => {
        if (!isSwapped) {
            return `Sell ${pair.from} for ${pair.to}`;
        }
        return `Buy ${pair.to} with ${pair.from}`;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!pairValues.from || !pairValues.to) {
            return;
        }

        if (onExchange) {
            onExchange({
                from: {
                    code: pair.from,
                    value: pairValues.from,
                },
                to: {
                    code: pair.to,
                    value: pairValues.to,
                }
            });
        }
    };

    const getRate = (): string => {
        if (!rate) {
            return "...";
        }
        return rate.toLocaleString(undefined, { maximumFractionDigits: 4, useGrouping: false });
    };

    return {
        pair,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
        handleSubmit,
        isDirty,
        getRate,
    };
};
