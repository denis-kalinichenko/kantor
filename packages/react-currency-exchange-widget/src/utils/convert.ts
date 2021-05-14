import {truncateDecimals} from "./truncateDecimals";

export const convertCurrency = (rate: number, operation: "multiply" | "divide", value?: number): number | undefined => {
    if (value === 0) {
        return value;
    }

    if (!value) {
        return undefined;
    }

    let calculated;
    const roundedRate = truncateDecimals(rate, 2);

    switch (operation) {
        case "multiply":
            calculated = value * roundedRate;
            break;
        case "divide":
            calculated = value / roundedRate;
            break;
        default:
            calculated = 0;
    }

    return truncateDecimals(calculated, 2);
}
