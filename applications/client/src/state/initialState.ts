import {IApplicationState} from "./types";

export const initialState: IApplicationState = {
    user: {
        firstName: "Denis",
        lastName: "Kalinichenko",
        accounts: {
            USD: 1408,
            EUR: 100.14,
            GBP: 0.98,
        },
    },
    currencies: {
        USD: {
            symbol: "$",
            name: "US Dollar",
            code: "USD",
        },
        EUR: {
            symbol: "€",
            name: "Euro",
            code: "EUR",
        },
        GBP: {
            symbol: "£",
            name: "British Pound",
            code: "GBP",
        },
    },
};
