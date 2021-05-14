import {ICurrencies, IAccounts} from "@bank/react-currency-exchange-widget";

export interface IUserState {
    firstName: string;
    lastName: string;
    accounts: IAccounts;
}

export interface IApplicationState {
    user: IUserState;
    currencies: ICurrencies;
}

export interface IStateAction {
    type: string;
    payload: any;
}
