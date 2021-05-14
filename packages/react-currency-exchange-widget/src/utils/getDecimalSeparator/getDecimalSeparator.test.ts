import {getDecimalSeparator} from "./";

describe("getDecimalSeparator", () => {
    it("should return decimal separator based on user' locale settings", () => {
        const separator = getDecimalSeparator();
        expect(separator).toEqual(".");
    });
});
