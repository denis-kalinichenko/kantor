import React from 'react';
import {Field} from ".";
import {render, configure, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

configure({
    defaultHidden: true,
});

const currencies = {
    USD: { symbol: "$", name: "US Dollar", code: "USD" },
    EUR: { symbol: "€", name: "Euro", code: "EUR" },
    PLN: { symbol: "zl", name: "Polish Zloty", code: "PLN" },
};

describe("Field", () => {
    it("should render currency dropdown", () => {
        const { getByRole } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
            />
        );
        expect(getByRole("combobox")).toBeInTheDocument();
    });

    it("should pass onCurrencyChange callback to Dropdown", () => {
        const { getByRole } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
            />
        );
        expect(getByRole("combobox")).toBeInTheDocument();
    });

    it("should render user balance in selected currency", () => {
        const { getByTestId } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
            />
        );
        expect(getByTestId("balance")).toHaveTextContent("Balance: 100.01 $");
    });

    it("should render currency input with formatted value", () => {
        const { getByTestId } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
                value={0.07123}
            />
        );
        expect(getByTestId("currencyInput")).toHaveValue("-0.07 $");
        expect(getByTestId("currencyInput")).toHaveAttribute("placeholder", "0 $");
        expect(getByTestId("currencyInput")).toBeRequired();
        expect(getByTestId("currencyInput")).toHaveAttribute("name", "from");
    });

    it("should call onValueChange callback", async () => {
        const callback = jest.fn();
        const { getByTestId } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={callback}
                autoFocus
                value={-10}
            />
        );
        expect(getByTestId("currencyInput")).toHaveValue("-10 $");
        userEvent.type(getByTestId("currencyInput"), "10");
        await waitFor(() => expect(callback).toHaveBeenCalledWith(10));
    });

    it("should call onValueChange callback with null value if value is not float", async () => {
        const callback = jest.fn();
        const { getByTestId } = render(
            <Field
                currencies={currencies}
                currencyCode={"USD"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={callback}
                autoFocus
                value={NaN}
            />
        );
        expect(getByTestId("currencyInput")).toHaveValue("");
        userEvent.type(getByTestId("currencyInput"), "0");
        await waitFor(() => expect(callback).toHaveBeenCalledWith());
    });

    it("should accept positive parameter", async () => {
        const { getByTestId } = render(
            <Field
                currencies={currencies}
                currencyCode={"PLN"}
                balance={100.01}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
                autoFocus
                positiveValue
                value={99.01}
            />
        );

        expect(getByTestId("currencyInput")).toHaveValue("+99.01 zl");
        expect(getByTestId("currencyInput")).toHaveAttribute("placeholder", "0 zl");
        expect(getByTestId("currencyInput")).toBeRequired();
        expect(getByTestId("currencyInput")).toHaveAttribute("name", "to");
    });

    it("should show an alert message when balance is exceed", async () => {
        const { getByTestId, getByRole } = render(
            <Field
                currencies={currencies}
                currencyCode={"PLN"}
                balance={999.55}
                onCurrencyChange={() => {}}
                onValueChange={() => {}}
                autoFocus
                value={1000}
            />
        );

        expect(getByTestId("currencyInput")).toHaveValue("-1 000 zl");
        expect(getByRole("alert")).toBeInTheDocument();
    });
});
