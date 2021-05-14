export const formatCurrency = (amount: number): string => {
    if (!amount) {
        return 0.00.toLocaleString();
    }

    return amount.toLocaleString(undefined, {
        useGrouping: false,
    });
}
