import {IAccounts, ICurrencies} from "../../types";

export interface ICurrencyExchangeWidgetProps {
    accounts: IAccounts;
    currencies: ICurrencies;
}

export enum DisplayMode {
    sell,
    buy
}
