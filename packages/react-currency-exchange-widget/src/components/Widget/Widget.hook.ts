import React, {useEffect, useState} from "react";
import {ICurrencyPair, ICurrencyPairValues, ValueType} from "../../types";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {IFieldProps} from "../Field/Field.types";
import currency from "currency.js";
import {convert} from "exchange-rates-api";

export const useWidget = (props: ICurrencyExchangeWidgetProps) => {
    const {currencies, accounts, defaultPair, onExchange} = props;

    const [pair, setPair] = useState<ICurrencyPair>(defaultPair);
    const [pairValues, setPairValues] = useState<ICurrencyPairValues>({
        from: null,
        to: null,
    });
    const [isSwapped, setIsSwapped] = useState<boolean>(false);
    const [rate, setRate] = useState<number>(0);

    const isDirty: boolean = (!pairValues.from || !pairValues.to) || pairValues.from > accounts[pair.from];

    const fetchRate = async () => {
        const amount = await convert(1, pair.from, pair.to, new Date());
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

    function truncateDecimals (num: number, digits: number) {
        const numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            // @ts-ignore
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

        // @ts-ignore
        return parseFloat(finalResult);
    }

    const convertLocally = (value: number | null, operation: "multiply" | "divide"): number | null => {
        if (value === 0) {
            return value;
        }

        if (!value) {
            return null;
        }

        let calculated;
        const roundedRate = truncateDecimals(rate, 2);

        switch (operation) {
            case "multiply":
                calculated = value * roundedRate;
                break;
            case "divide":
                calculated = value / roundedRate;
                break;
        }

        return truncateDecimals(calculated, 2);
    }

    const handleValueChange = (type: ValueType, value: number | null) => {
        switch (type) {
            case ValueType.from:
                return setPairValues({
                    from: value,
                    to: convertLocally(value, "multiply"),
                });
            case ValueType.to:
                return setPairValues({
                    to: value,
                    from: convertLocally(value, "divide"),
                });
        }
    };

    const getFieldProps = (swap: boolean): IFieldProps => {
        return {
            currencies,
            currencyCode: !swap ? pair.from : pair.to,
            balance: !swap ? accounts[pair.from] : accounts[pair.to],
            positiveValue: swap,
            value: !swap ? pairValues.from : pairValues.to,
            onCurrencyChange: newCurrencyCode => {
                if (!swap) {
                    return setCurrencyFrom(newCurrencyCode);
                }
                return setCurrencyTo(newCurrencyCode);
            },
            onValueChange: newValue => handleValueChange((!swap ? ValueType.from : ValueType.to), newValue),
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
    }

    return {
        pair,
        rate,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
        handleSubmit,
        isDirty,
    };
};
