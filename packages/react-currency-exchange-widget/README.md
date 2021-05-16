# @bank/react-currency-exchange-widget

Reusable and accessible Currency Exchange Widget build on React and TypeScript.

## Installation

```bash
yarn add @bank/react-currency-exchange-widget
```

## Usage

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

### Config

#### `currencies`
Type: **Object** | **Required**

#### `accounts`
Type: **Object** | **Required**

#### `defaultPair`
Type: **Object** | **Required**

#### `onExchange`
Type: **Function** | Optional | returns number value
