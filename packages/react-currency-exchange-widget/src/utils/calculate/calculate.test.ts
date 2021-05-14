import {calculate} from "./";

describe("calculate", () => {
    it("should return 0 as number if provided value is 0", () => {
        const amount = calculate(1.23, "multiply", 0);
        expect(amount).not.toBeNaN();
        expect(amount).toEqual(0);
    });

    it("should return undefined if value is not provided", () => {
        const amount = calculate(1.23, "multiply");
        expect(amount).toBeUndefined();
    });

    it("should multiply value by rate and return as number", () => {
        const amount = calculate(1.23, "multiply", 2);
        expect(amount).not.toBeNaN();
        expect(amount).toEqual(2.46);
    });

    it("should divide value to rate and return as number", () => {
        const amount = calculate(1.23, "divide", 150);
        expect(amount).not.toBeNaN();
        expect(amount).toEqual(121.95);
    });

    it("should return rounded down value with truncated decimals", () => {
        const amount = calculate(0.827765, "multiply", 0.09);
        expect(amount).not.toBeNaN();
        expect(amount).toEqual(0.07);
    });
});
