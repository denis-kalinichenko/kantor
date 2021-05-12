import {ICurrencies, ICurrency} from "../../types";

export interface IFieldProps {
    currencies: ICurrencies;
    currencyCode: ICurrency["code"];
    balance: number;
    onCurrencyChange: (newCurrencyCode: ICurrency["code"]) => void;
    positiveValue?: boolean;
    autoFocus?: boolean;
}
