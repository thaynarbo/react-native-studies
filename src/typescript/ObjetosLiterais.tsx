interface Persona {
    nomeCompleto: string;
    idade: number;
    direcao: Direcao;
}

interface Direcao {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterais = () => {
    const pessoa: Persona = {
        nomeCompleto: "Thaynar",
        idade: 25,
        direcao: {
            pais: "Brasil",
            casaNo: 162,
        },
    };
    return (
        <>
            <h3>Objetos Literais</h3>
            <code>
                <pre>{JSON.stringify(pessoa, null, 2)}</pre>
            </code>
        </>
    );
};
