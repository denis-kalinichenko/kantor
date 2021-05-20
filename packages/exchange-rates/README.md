# @bank/exchange-rates

Reusable Wrapper for exchange rates REST API with a fake data - rates.denis.app.

## Installation

```bash
yarn add @bank/exchange-rates
```

## Usage

```javascript
import {convert} from "@bank/exchange-rates";
```

```javascript
const amount = await convert(100, "USD", "EUR", "latest");
```
