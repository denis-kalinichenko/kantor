import React from 'react';
import {CurrencyDropdown} from ".";
import {render, fireEvent, screen, configure, getAllByRole} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

configure({
    defaultHidden: true
});

const currencies = {
    USD: { symbol: "$", name: "US Dollar", code: "USD" },
    PLN: { symbol: "zl", name: "Polish Zloty", code: "PLN" },
};

describe("CurrencyDropdown", () => {
    it("should render button with current currency code", () => {
        render(<CurrencyDropdown currencies={{}} onChange={() => {}} value={"USD"}/>);
        expect(screen.getByRole("button")).toHaveTextContent("USD");
    });

    it("should show menu after button clicked", () => {
        const {getByRole} = render(<CurrencyDropdown currencies={{}} onChange={() => {}} value={"USD"}/>);
        expect(getByRole("menu")).not.toBeVisible();
        fireEvent.click(getByRole("button"));
        expect(getByRole("menu")).toBeVisible();
    });

    it("should render menu options", () => {
        const {getByRole} = render(
            <CurrencyDropdown
                currencies={currencies}
                onChange={() => {}}
                value={"USD"}
            />
        );

        const menuContainer = getByRole("menu");
        expect(getAllByRole(menuContainer, "menuitem")).toHaveLength(2);
        expect(getAllByRole(menuContainer, "menuitem")[0]).toHaveTextContent("US Dollar");
        expect(getAllByRole(menuContainer, "menuitem")[1]).toHaveTextContent("Polish Zloty");
    });

    it("should call onChange callback with selected currency code", () => {
        const onChange = jest.fn();

        const {getAllByRole} = render(
            <CurrencyDropdown
                currencies={currencies}
                onChange={onChange}
                value={"USD"}
            />
        );
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.click(getAllByRole("menuitem")[1]);
        expect(onChange).toHaveBeenCalledWith("PLN");
    });
});
