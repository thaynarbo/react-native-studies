
export const TiposBasicos = () => {
    const name:string ='Thaynar';
    const age:number = 25;
    const isActive:boolean = false;

    const powers:(string|number)[]= [];

    
    return (
        <>
            <h3>Tipos Básicos</h3>
            {name}, {age}, {isActive?'Ativo':'Não ativo'}
            <br />
            {powers.join(', ')}
        </>
    )
}
