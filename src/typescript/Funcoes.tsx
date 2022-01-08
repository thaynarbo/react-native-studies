export const Funcoes = () => {
    const sumar = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <>
            <h3>Funções</h3>
            <span>O resultado é : {sumar(10, 5)}</span>
        </>
    );
};
