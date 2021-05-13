import React, {FC} from "react";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {Field} from "../Field";
import {Heading1, PrimaryButton} from "@bank/ui-library";
import {Form, MarketRate, ToggleDisplayModeButton, ToggleDisplayModeButtonWrapper} from "./Widget.styled";
import {useWidget} from "./Widget.hook";

export const CurrencyExchangeWidget: FC<ICurrencyExchangeWidgetProps> = ({
    currencies,
    accounts,
    defaultPair,
    onExchange
}): JSX.Element => {
    const {
        pair,
        rate,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
        handleSubmit,
    } = useWidget({currencies, accounts, defaultPair, onExchange});

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Heading1>{!isSwapped ? `Sell ${pair.from}` : `Buy ${pair.to}`}</Heading1>
                <MarketRate>
                    Market order &bull; 1 {currencies[pair.from].symbol} = {rate ? rate : "..."} {currencies[pair.to].symbol}
                </MarketRate>

                <Field {...getFieldProps(isSwapped)} autoFocus/>

                <ToggleDisplayModeButtonWrapper>
                    <ToggleDisplayModeButton type="button" onClick={() => swapPair()}>
                        {isSwapped ? <>&#8593;</> : <>&#8595;</>}
                    </ToggleDisplayModeButton>
                </ToggleDisplayModeButtonWrapper>

                <Field {...getFieldProps(!isSwapped)} />
            </div>
            <PrimaryButton type="submit">{getButtonLabel()}</PrimaryButton>
        </Form>
    );
};
