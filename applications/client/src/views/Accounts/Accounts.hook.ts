import {convert} from "exchange-rates-api";
import {IAccounts} from "@bank/react-currency-exchange-widget";
import {useEffect, useState} from "react";

export const useAccounts = (accounts: IAccounts) => {
    const [total, setTotal] = useState<number>(0);
    const [calculation, setCalculation] = useState<boolean>(false);

    useEffect(() => {
        const calculateTotal = async () => {
            setCalculation(true);
            let total = accounts["USD"];
            for (const code of Object.keys(accounts)) {
                if (code !== "USD" && accounts[code] > 0) {
                    total += await convert(accounts[code], code, "USD", "latest");
                }
            }
            setTotal(total);
            setCalculation(false);
        };

        calculateTotal();
    }, [accounts]);

    return {
        total,
        calculation,
    };
}
