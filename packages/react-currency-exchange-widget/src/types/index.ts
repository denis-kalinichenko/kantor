export interface ICurrency {
    symbol: string;
    name: string;
    code: string;
}

export interface ICurrencies {
    [key: string]: ICurrency;
}

export interface IAccounts {
    [key: string]: number;
}

export interface ICurrencyPair {
    from: ICurrency["code"];
    to: ICurrency["code"];
}
