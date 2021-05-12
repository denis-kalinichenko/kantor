import React, {FC, useState} from "react";
import {DisplayMode, ICurrencyExchangeWidgetProps} from "./Widget.types";
import {Field} from "../Field";
import {Heading1, PrimaryButton} from "@bank/ui-library";
import {Form, MarketRate, ToggleDisplayModeButton, ToggleDisplayModeButtonWrapper} from "./Widget.styled";
import {useWidget} from "./Widget.hook";

export const CurrencyExchangeWidget: FC<ICurrencyExchangeWidgetProps> = ({ currencies, accounts }): JSX.Element => {
    const {
        currencyToSell,
        selectCurrencyToSell,
        currencyToBuy,
        selectCurrencyToBuy,
        displayMode,
        toggleDisplayMode,
        getButtonLabel,
    } = useWidget({
        currencies,
        accounts,
    });

    return (
      <Form onSubmit={(event) => event.preventDefault()}>
          <div>
              <Heading1>{displayMode === DisplayMode.sell ? "Sell" : "Buy"} {currencyToSell.code}</Heading1>
              <MarketRate>Market order &bull; 1 {currencyToSell.symbol} = 0,8245 {currencyToBuy.symbol}</MarketRate>
              <Field
                  currencies={currencies}
                  currency={currencyToSell}
                  balance={accounts[currencyToSell.code]}
                  onCurrencyChange={selectCurrencyToSell}
                  autoFocus
              />
              <ToggleDisplayModeButtonWrapper>
                  <ToggleDisplayModeButton type="button" onClick={() => toggleDisplayMode()}>
                      {displayMode === DisplayMode.sell ? <>&#8595;</> : <>&#8593;</>}
                  </ToggleDisplayModeButton>
              </ToggleDisplayModeButtonWrapper>
              <Field
                  currencies={currencies}
                  currency={currencyToBuy}
                  balance={accounts[currencyToBuy.code]}
                  onCurrencyChange={selectCurrencyToBuy}
              />
          </div>
          <PrimaryButton>{getButtonLabel()}</PrimaryButton>
      </Form>
    );
};
