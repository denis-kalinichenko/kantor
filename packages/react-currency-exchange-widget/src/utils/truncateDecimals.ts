export const truncateDecimals = (num: number, digits: number): number => {
    const numS = num.toString();
    const decPos = numS.indexOf('.');
    const substrLength = decPos == -1 ? numS.length : 1 + decPos + digits;
    const trimmedResult = numS.substr(0, substrLength);
    const finalResult = isNaN(Number(trimmedResult)) ? "0" : trimmedResult;
    return parseFloat(finalResult);
}
