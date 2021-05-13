import {IAccounts, ICurrencies, ICurrencyPair, IExchangeData} from "../../types";

export interface ICurrencyExchangeWidgetProps {
    accounts: IAccounts;
    currencies: ICurrencies;
    defaultPair: ICurrencyPair;
    onExchange?: (values: IExchangeData) => void;
}
