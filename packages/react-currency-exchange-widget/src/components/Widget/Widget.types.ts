import {IAccounts, ICurrencies, ICurrencyPair} from "../../types";

export interface ICurrencyExchangeWidgetProps {
    accounts: IAccounts;
    currencies: ICurrencies;
    defaultPair: ICurrencyPair;
}
