import {ICurrencies} from "../../types";

export interface ICurrencyDropdownProps {
    currencies: ICurrencies;
    onChange: (value: string) => void;
    value: string;
}
