import { useState } from "react";

export const useCounter = (initial: number = 10) => {
    const [valor, setValor] = useState(initial);
    const acumular = (number: number) => {
        setValor(valor + number);
    };

    return {
        valor,
        acumular,
    };
};
