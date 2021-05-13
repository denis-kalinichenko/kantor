import {ICurrencies, ICurrency} from "../../types";

export interface IFieldProps {
    currencies: ICurrencies;
    currencyCode: ICurrency["code"];
    balance: number;
    positiveValue?: boolean;
    autoFocus?: boolean;
    value: number | null;
    onCurrencyChange: (newCurrencyCode: ICurrency["code"]) => void;
    onValueChange: (value: number | null) => void;
}
