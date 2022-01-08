import { useCounter } from "../hooks/useCounter";
export const ContadorComHook = () => {
    const { valor, acumular } = useCounter(10);

    return (
        <>
            <h3>
                Contador com hook: <small>{valor}</small>
            </h3>
            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    );
};
