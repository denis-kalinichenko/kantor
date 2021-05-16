import React, {FC} from "react";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {Field} from "../Field";
import {Heading1, PrimaryButton} from "@bank/ui-library";
import {Form, MarketRate, ToggleDisplayModeButton, ToggleDisplayModeButtonWrapper, Body} from "./Widget.styled";
import {useWidget} from "./Widget.hook";

export const CurrencyExchangeWidget: FC<ICurrencyExchangeWidgetProps> = ({
    currencies,
    accounts,
    defaultPair,
    onExchange
}): JSX.Element => {
    const {
        pair,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
        handleSubmit,
        isDirty,
        getRate,
    } = useWidget({currencies, accounts, defaultPair, onExchange});
    return (
        <Form onSubmit={handleSubmit} role="form">
            <Body>
                <Heading1 role="heading">{!isSwapped ? `Sell ${pair.from}` : `Buy ${pair.to}`}</Heading1>
                <MarketRate data-testid="marketRate">
                    Market order &bull; 1 {currencies[pair.from].symbol} = {getRate()} {currencies[pair.to].symbol}
                </MarketRate>

                <Field {...getFieldProps(isSwapped)} autoFocus/>

                <ToggleDisplayModeButtonWrapper>
                    <ToggleDisplayModeButton type="button" onClick={() => swapPair()} role="button" data-testid="swap">
                        {isSwapped ? <>&#8593;</> : <>&#8595;</>}
                    </ToggleDisplayModeButton>
                </ToggleDisplayModeButtonWrapper>

                <Field {...getFieldProps(!isSwapped)} />
            </Body>
            <PrimaryButton
                type="submit"
                disabled={isDirty}
                role="button"
                data-testid="exchangeButton"
            >
                {getButtonLabel()}
            </PrimaryButton>
        </Form>
    );
};
