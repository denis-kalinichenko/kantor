import {truncateDecimals} from "./";

describe('truncateDecimals', () => {
    it('should return the same integer as provided',  () => {
        const value = truncateDecimals(123, 2);
        expect(value).not.toBeNaN();
        expect(value).toEqual(123);
    });

    it('should return a number with truncated decimals', () => {
        const value = truncateDecimals(1024.76452342, 2);
        expect(value).toEqual(1024.76);
    });

    it('should not return a rounded up number', () => {
        const value = truncateDecimals(1.59, 1);
        expect(value).not.toEqual(1.6);
        expect(value).toEqual(1.5);
    });

    it('should handle negative values', () => {
        const value = truncateDecimals(-0.129, 2);
        expect(value).toEqual(-0.12);
    });

    it('should return 0 if value is incorrect', () => {
        const value = truncateDecimals(NaN, 2);
        expect(value).toEqual(0);
    });
});
