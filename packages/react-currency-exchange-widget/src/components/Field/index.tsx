import React, {FC} from "react";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {Dropdown, DropdownButton, DropdownMenu, DropdownMenuOption} from "@bank/ui-library";
import {Balance, Input, Wrapper} from "./Field.styled";
import {IFieldProps} from "./Field.types";
import {ICurrency} from "../../types";

export const Field: FC<IFieldProps> = ({
   currencies,
   currency,
   onCurrencyChange,
   autoFocus,
   balance = 0
}) => {
    const {buttonProps, itemProps, isOpen, setIsOpen} = useDropdownMenu(Object.keys(currencies).length - 1);

    const handleCurrencyChange = (newCurrency: ICurrency) => {
        setIsOpen(false);
        return onCurrencyChange(newCurrency);
    };

    return (
        <Wrapper>
            <div>
                <Dropdown>
                    <DropdownButton {...buttonProps} type="button">{currency.code}</DropdownButton>
                    <DropdownMenu role="menu" isOpen={isOpen}>
                        {
                            Object.keys(currencies)
                                .map((key, index) => (
                                    <DropdownMenuOption
                                        key={currencies[key].code}
                                        {...itemProps[index]}
                                        onClick={() => handleCurrencyChange(currencies[key])}
                                    >
                                        {currencies[key].name} <span>{currencies[key].code}</span>
                                    </DropdownMenuOption>
                                ))
                        }
                    </DropdownMenu>
                </Dropdown>
                <Balance>Balance: {balance} {currency.symbol}</Balance>
            </div>
            <Input
                type="number"
                name={currency.code}
                placeholder={`0 ${currency.symbol}`}
                defaultValue=""
                inputMode="decimal"
                autoComplete="off"
                min={0}
                autoFocus={autoFocus}
                required
            />
        </Wrapper>
    );
};
