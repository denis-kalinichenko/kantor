const CurrencyExchangeWidget = jest.fn();
jest.mock("./components/Widget", () => {
    return {CurrencyExchangeWidget};
});

import index from ".";

describe("entry file", () =>  {
    it("should has exported default component", () => {
        expect(index).toBe(CurrencyExchangeWidget);
    });
});
