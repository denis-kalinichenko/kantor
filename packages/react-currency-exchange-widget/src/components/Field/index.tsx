import React, {FC, useState} from "react";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {Dropdown, DropdownButton, DropdownMenu, DropdownMenuOption} from "@bank/ui-library";
import {Balance, Input, InputWrapper, Wrapper, Error} from "./Field.styled";
import {IFieldProps} from "./Field.types";
import NumberFormat, {NumberFormatValues} from 'react-number-format';

export const Field: FC<IFieldProps> = ({
   currencies,
   currencyCode,
   onCurrencyChange,
   positiveValue,
   autoFocus,
   balance = 0,
   value,
   onValueChange,
}) => {
    const {buttonProps, itemProps, isOpen, setIsOpen} = useDropdownMenu(Object.keys(currencies).length);
    const [inFocus, setInFocus] = useState<boolean>(false);

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
            <InputWrapper>
                <NumberFormat
                    customInput={Input}
                    thousandSeparator=" "
                    decimalSeparator="."
                    allowLeadingZeros={false}
                    allowNegative={false}
                    placeholder={`0 ${currency.symbol}`}
                    prefix={positiveValue ? "+" : "-"}
                    suffix={' ' + currency.symbol}
                    decimalScale={2}
                    onValueChange={(values: NumberFormatValues) => {
                        if (inFocus) {
                            if (!values.floatValue && values.floatValue !== 0) {
                                return onValueChange();
                            }
                            return onValueChange(Math.abs(values.floatValue));
                        }
                    }}
                    autoFocus={autoFocus}
                    autoComplete="off"
                    required
                    value={(value || value === 0) ? value : ""}
                    inputMode="decimal"
                    isAllowed={(values: NumberFormatValues) => values.formattedValue.length < 14}
                    onFocus={() => setInFocus(true)}
                    onBlur={() => setInFocus(false)}
                    step="0.01"
                    lang="en_EN"
                />
                {(!positiveValue && value && value > balance) ? <Error>exceeds balance</Error> : ""}
            </InputWrapper>
        </Wrapper>
    );
};
