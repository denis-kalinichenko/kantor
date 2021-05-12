import React, {FC} from "react";
import {ICurrencyExchangeWidgetProps} from "./Widget.types";
import {Field} from "../Field";
import {Heading1, PrimaryButton} from "@bank/ui-library";
import {Form, MarketRate, ToggleDisplayModeButton, ToggleDisplayModeButtonWrapper} from "./Widget.styled";
import {useWidget} from "./Widget.hook";

export const CurrencyExchangeWidget: FC<ICurrencyExchangeWidgetProps> = ({
     currencies,
     accounts,
     defaultPair
}): JSX.Element => {
    const {
        pair,
        swapPair,
        isSwapped,
        getFieldProps,
        getButtonLabel,
    } = useWidget({currencies, accounts, defaultPair});

    return (
        <Form onSubmit={(event) => event.preventDefault()}>
            <div>
                <Heading1>{!isSwapped ? `Sell ${pair.from}` : `Buy ${pair.to}`}</Heading1>
                <MarketRate>Market order &bull; 1 {currencies[pair.from].symbol} =
                    0,8245 {currencies[pair.to].symbol}</MarketRate>

                <Field {...getFieldProps(isSwapped)} autoFocus/>

                <ToggleDisplayModeButtonWrapper>
                    <ToggleDisplayModeButton type="button" onClick={() => swapPair()}>
                        {isSwapped ? <>&#8593;</> : <>&#8595;</>}
                    </ToggleDisplayModeButton>
                </ToggleDisplayModeButtonWrapper>

                <Field {...getFieldProps(!isSwapped)} />
            </div>
            <PrimaryButton>{getButtonLabel()}</PrimaryButton>
        </Form>
    );
};
