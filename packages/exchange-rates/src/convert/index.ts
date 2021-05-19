export const convert = async (
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    date = 'latest'
): Promise<number> => {
    if (Array.isArray(toCurrency)) {
        throw new TypeError('Cannot convert to multiple currencies at the same time');
    }

    const data = await fetch(`https://rates.denis.app/latest?base=${fromCurrency}&symbols=${toCurrency}`).then((response) => {
        if (response.status !== 200) {
            throw new Error(`API returned a bad response (HTTP ${response.status})`);
        }
        return response.json();
    });

    const { rates } = data;

    return amount * rates[toCurrency];
}
