# kantor<sub><sup>*</sup></sub>
Currency Exchange App and Widget

[![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=kantor)](https://kantor.denis.app)
[![GitHub branch checks state](https://img.shields.io/github/checks-status/denis-kalinichenko/kantor/main)](https://github.com/denis-kalinichenko/kantor/deployments)
[![Coverage](https://kantor.denis.app/coverage/badge-statements.svg)](https://kantor.denis.app/coverage/lcov-report/index.html)
[![Coverage](https://kantor.denis.app/coverage/badge-branches.svg)](https://kantor.denis.app/coverage/lcov-report/index.html)
[![Coverage](https://kantor.denis.app/coverage/badge-functions.svg)](https://kantor.denis.app/coverage/lcov-report/index.html)
[![Coverage](https://kantor.denis.app/coverage/badge-lines.svg)](https://kantor.denis.app/coverage/lcov-report/index.html)
[![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/denis-kalinichenko/kantor)](https://github.com/denis-kalinichenko/kantor/releases)


## Overview

"Kantor" is a mobile-friendly Currency Exchange App built on React and TypeScript. Exchange rates built on top of fake data from service rates.denis.app. 

### Features

* User-friendly
* Mobile-friendly
* Written entirely in React, TypeScript, Hooks, styled components
* Accessible (super important for online banking)
* Covered by automated tests (widget)
* Rates from European Central Bank, refreshed every 10 seconds
* Three currency accounts with USD, EUR, GBP, - but widget supports more
* Supports account balances

### Architecture

The project consists of three parts:

1. **Currency Exchange Widget** as ready-to-use ES Module
2. **UI library** with ready-to-use ES Module with a styled components, color palette, etc
3. Simple **Client app** with a simple state managment build on [CRA](https://github.com/facebook/create-react-app) with TypeScript.

The monorepo is managed by [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces). Folders structure contains:

#### `applications/*`
Directory for full-fledged applications. Contains main Client application.

#### `packages/*`
Directory for reusable modules, that ready to be published to some private/public NPM registry,  GitHub Packages or any other package registry. Contains two modules with a `@bank/*` scope:

##### [`packages/react-currency-exchange-widget`](packages/react-currency-exchange-widget)
###### Usage
```javascript
import {CurrencyExchangeWidget} from "@bank/react-currency-exchange-widget";
```

```jsx
<CurrencyExchangeWidget
  accounts={{
    USD: 100.01,
    EUR: 99,
  }}
  currencies={{
    USD: { symbol: "$", name: "US Dollar", code: "USD" },
    EUR: { symbol: "€", name: "Euro", code: "EUR" },
  }}
  defaultPair={{
    from: "USD",
    to: "EUR"
  }}
  onExchange={(value) => {}}
/>
```

##### [`packages/ui-library`](packages/ui-library)
###### Usage Example
```javascript
import {Heading1, PrimaryButton, Palette, GlobalStyles, ActionButton} from "@bank/ui-library";
```

```jsx
<PrimaryButton type="submit">Fancy Button</PrimaryButton>
```

##### [`packages/exchange-rates`](packages/exchange-rates)
###### Usage
```javascript
import {convert} from "@bank/exchange-rates";
```

```javascript
const amount = await convert(100, "USD", "EUR", "latest");
```

## Live Demo

[kantor.denis.app](https://kantor.denis.app)

## Quick Start

### Installation

Use yarn packages manager to install packages:

```bash
yarn
```

### Run locally

```bash
yarn start
```

### Tests

```bash
yarn test
```

## TBD

* error handling
* cover client app with unit tests
* add storybook for ui library
* add cypress e2e tests


## License

[The Unlicense](LICENSE)

## Author

[Denis Kalinichenko](https://github.com/denis-kalinichenko)

<sub><sup>* "currency exchange bureau" from polish.</sub></sup>
