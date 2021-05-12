import React, {FC} from "react";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {Dropdown, DropdownButton, DropdownMenu, DropdownMenuOption} from "@bank/ui-library";
import {Balance, Input, Wrapper} from "./Field.styled";
import {IFieldProps} from "./Field.types";

export const Field: FC<IFieldProps> = ({
   currencies,
   currencyCode,
   onCurrencyChange,
   positiveValue,
   autoFocus,
   balance = 0,
}) => {
    const {buttonProps, itemProps, isOpen, setIsOpen} = useDropdownMenu(Object.keys(currencies).length);

    const handleCurrencyChange = (newCurrencyCode: string) => {
        setIsOpen(false);
        return onCurrencyChange(newCurrencyCode);
    };

    const currency = currencies[currencyCode];

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
                                        onClick={() => handleCurrencyChange(key)}
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
                name={currency.code}
                placeholder={`0 ${currency.symbol}`}
                suffix={` ${currency.symbol}`}
                prefix={positiveValue ? "+" : "-"}
                groupSeparator={" "}
                defaultValue=""
                autoComplete="off"
                autoFocus={autoFocus}
                required
                allowNegativeValue={false}
                maxLength={8}
                step={1}
            />
        </Wrapper>
    );
};
