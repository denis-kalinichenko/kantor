import React, {FC, useState} from "react";
import NumberFormat, {NumberFormatValues} from 'react-number-format';
import {getDecimalSeparator, formatCurrency} from "../../utils";
import {CurrencyDropdown} from "../CurrencyDropdown";
import {Balance, Input, InputWrapper, Wrapper, Error} from "./Field.styled";
import {IFieldProps} from "./Field.types";

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
    const [inFocus, setInFocus] = useState<boolean>(false);
    const currency = currencies[currencyCode];

    const handleValueChange = (values: NumberFormatValues) => {
        if (inFocus) {
            if (!values.floatValue && values.floatValue !== 0) {
                return onValueChange();
            }
            return onValueChange(Math.abs(values.floatValue));
        }
    };

    return (
        <Wrapper>
            <div>
                <CurrencyDropdown currencies={currencies} onChange={onCurrencyChange} value={currency.code}/>
                <Balance>Balance: {formatCurrency(balance)} {currency.symbol}</Balance>
            </div>
            <InputWrapper>
                <NumberFormat
                    required
                    customInput={Input}
                    thousandSeparator=" "
                    decimalSeparator={getDecimalSeparator()}
                    allowLeadingZeros={false}
                    allowNegative={false}
                    placeholder={`0 ${currency.symbol}`}
                    prefix={positiveValue ? "+" : "-"}
                    suffix={' ' + currency.symbol}
                    decimalScale={2}
                    autoFocus={autoFocus}
                    autoComplete="off"
                    inputMode="decimal"
                    value={(value || value === 0) ? value : ""}
                    isAllowed={(values: NumberFormatValues) => values.formattedValue.length < 14}
                    onFocus={() => setInFocus(true)}
                    onBlur={() => setInFocus(false)}
                    onValueChange={handleValueChange}
                />
                {(!positiveValue && value && value > balance) ? <Error>exceeds balance</Error> : ""}
            </InputWrapper>
        </Wrapper>
    );
};
