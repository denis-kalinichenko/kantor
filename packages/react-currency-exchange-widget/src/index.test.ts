import index from ".";
import {CurrencyExchangeWidget} from "./components/Widget";

describe("entry file", () =>  {
    it("should has exported default component", () => {
        expect(index).toBe(CurrencyExchangeWidget);
    });
});
