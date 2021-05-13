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

export interface ICurrencyPairValues {
    from: number | null;
    to: number | null;
}

export enum ValueType {
    from = "from",
    to = "to",
}

export interface IExchangeData {
    from: {
        code: ICurrency["code"];
        value: number;
    };
    to: {
        code: ICurrency["code"];
        value: number;
    }
}
