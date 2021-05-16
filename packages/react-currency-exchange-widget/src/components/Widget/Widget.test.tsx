import React from "react";
import {fireEvent, render, waitFor, getAllByRole, getByRole, configure} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

configure({
    defaultHidden: true,
});

const convert = jest.fn();
jest.mock("exchange-rates-api", () => ({
    convert,
}));

import {CurrencyExchangeWidget} from ".";

const currencies = {
    USD: { symbol: "$", name: "US Dollar", code: "USD" },
    EUR: { symbol: "€", name: "Euro", code: "EUR" },
    GBP: { symbol: "latest", name: "British Pound", code: "GBP" },
};

const accounts = {
    USD: 100.01,
    EUR: 0,
    PLN: 200.54,
};

const defaultPair = {
    from: "USD",
    to: "EUR",
};

const defaultProps = {
    currencies,
    accounts,
    defaultPair,
}

beforeEach(() => {
    convert.mockResolvedValue(0.8248113304);
});

describe("Widget", () => {
    it("should render form", async () => {
        const { getByRole } = render(
            <CurrencyExchangeWidget {...defaultProps}/>
        );

        await waitFor(() => expect(getByRole("form")).toBeInTheDocument());
    });

    it("should render market rate of currency pair", async () => {
        const { getByTestId } = render(
            <CurrencyExchangeWidget {...defaultProps}/>
        );

        await waitFor(() => {
            expect(convert).toHaveBeenCalledWith(1, "USD", "EUR", "latest");
            expect(getByTestId("marketRate")).toHaveTextContent(/1 \$| = 0.8248 €$/i);
        });
    });

    it("should swap currencies after clicking on item", async () => {
        const { getByTestId, getByRole } = render(
            <CurrencyExchangeWidget {...defaultProps}/>
        );

        expect(getByRole("heading")).toHaveTextContent(/Sell USD/);
        expect(getByTestId("marketRate")).toHaveTextContent(/1 \$| = 0.8248 €$/i);
        expect(getByTestId("exchangeButton")).toHaveTextContent(/Sell USD for EUR/);

        convert.mockResolvedValue(1.2123113304);
        fireEvent.click(getByTestId("swap"));

        await waitFor(() => {
            expect(getByRole("heading")).toHaveTextContent(/Buy USD/);
            expect(getByTestId("marketRate")).toHaveTextContent(/1 € = 1.2123 \$|$/i);
            expect(getByTestId("exchangeButton")).toHaveTextContent(/Buy USD with EUR/);
        });
    });

    it("should enable submit button if form is valid", async () => {
        const { getByTestId, getAllByTestId } = render(
            <CurrencyExchangeWidget {...defaultProps}/>
        );

        await waitFor(() => {
            expect(getByTestId("exchangeButton")).toBeDisabled();
            fireEvent.change(getAllByTestId("currencyInput")[0], { target: { value: "10" } });
            expect(getByTestId("exchangeButton")).toBeEnabled();
            fireEvent.change(getAllByTestId("currencyInput")[0], { target: { value: "100000" } });
            expect(getByTestId("exchangeButton")).toBeDisabled();
        });
    });

    it("should call onExchange callback after form submit", async () => {
        const onExchangeSpy = jest.fn();

        const { getByRole, getAllByTestId } = render(
            <CurrencyExchangeWidget {...defaultProps} onExchange={onExchangeSpy}/>
        );

        await waitFor(() => {
            expect(onExchangeSpy).not.toHaveBeenCalled();
            fireEvent.submit((getByRole("form")));
            expect(onExchangeSpy).not.toHaveBeenCalled();

            fireEvent.change(getAllByTestId("currencyInput")[1], { target: { value: "10" } });
            fireEvent.submit((getByRole("form")));
            expect(onExchangeSpy).toHaveBeenCalledWith({
                from: { code: "USD", value: 12.19},
                to: { code: "EUR", value: 10},
            });
        });
    });

    it("should swap currencies after selecting the same currency in both dropdowns", async () => {
        const container = render(
            <CurrencyExchangeWidget {...defaultProps}/>
        );

        expect(container.getByRole("heading")).toHaveTextContent(/Sell USD/);
        expect(container.getByTestId("exchangeButton")).toHaveTextContent(/Sell USD for EUR/);

        const [dropdown1, dropdown2] = container.getAllByRole("combobox");
        expect(getByRole(dropdown1, "button")).toHaveTextContent("USD");
        expect(getByRole(dropdown2, "button")).toHaveTextContent("EUR");

        fireEvent.click(getAllByRole(dropdown2, "menuitem")[2]);

        await waitFor(() => {
            expect(container.getByRole("heading")).toHaveTextContent(/Sell USD/);
            expect(container.getByTestId("exchangeButton")).toHaveTextContent(/Sell USD for GBP/);
        });

        fireEvent.click(getAllByRole(dropdown2, "menuitem")[0]);

        await waitFor(() => {
            expect(container.getByRole("heading")).toHaveTextContent(/Sell GBP/);
            expect(container.getByTestId("exchangeButton")).toHaveTextContent(/Sell GBP for USD/);
        });
    });
});
