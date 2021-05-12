import {ICurrencies, ICurrency} from "../../types";

export interface IFieldProps {
    currencies: ICurrencies;
    currency: ICurrency;
    balance: number;
    onCurrencyChange: (newCurrency: ICurrency) => void;
    autoFocus?: boolean;
}
