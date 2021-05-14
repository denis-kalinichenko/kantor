export const getDecimalSeparator = (): string => {
    const n = 1.1;
    return n.toLocaleString().substring(1, 2);
}
