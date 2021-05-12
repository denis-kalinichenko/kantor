import {useState} from "react";
import {ICurrency} from "../../types";
import {DisplayMode, ICurrencyExchangeWidgetProps} from "./Widget.types";

export const useWidget = (props: ICurrencyExchangeWidgetProps) => {
    const {currencies, accounts} = props;

    const defaultCurrencyToSell = currencies[Object.keys(currencies)[0]];
    const defaultCurrencyToBuy = currencies[Object.keys(currencies)[1]];

    const [currencyToSell, setCurrencyToSell] = useState<ICurrency>(defaultCurrencyToSell);
    const [currencyToBuy, setCurrencyToBuy] = useState<ICurrency>(defaultCurrencyToBuy);
    const [displayMode, setDisplayMode] = useState<DisplayMode>(DisplayMode.sell);

    const selectCurrencyToBuy = (currency: ICurrency): void => setCurrencyToBuy(prevState => {
        if (currency === currencyToSell) {
            setCurrencyToSell(prevState);
        }
        return currency;
    });

    const selectCurrencyToSell = (currency: ICurrency): void => setCurrencyToSell(prevState => {
        if (currency === currencyToBuy) {
            setCurrencyToBuy(prevState);
        }
        return currency;
    });

    const toggleDisplayMode = (): void => setDisplayMode(prevState => {
        return prevState === DisplayMode.sell ? DisplayMode.buy : DisplayMode.sell;
    });

    const getButtonLabel = (): string => {
        if (displayMode === DisplayMode.sell) {
            return `Sell ${currencyToSell.code} for ${currencyToBuy.code}`;
        }
        return `Buy ${currencyToSell.code} with ${currencyToBuy.code}`;
    };

    return {
        currencyToSell,
        selectCurrencyToSell,

        currencyToBuy,
        selectCurrencyToBuy,

        displayMode,
        toggleDisplayMode,

        getButtonLabel,
    };
};
