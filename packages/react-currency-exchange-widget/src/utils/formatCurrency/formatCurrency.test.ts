import {formatCurrency} from "./";

describe("formatCurrency", () => {
    it("should return number as string", () => {
        const value = formatCurrency(1.01);
        expect(value).toEqual("1.01");
    });

    it("should return 0 value if amount not provided", () => {
        const value = formatCurrency(NaN);
        expect(value).toEqual("0");
    });
});
