
export const Funcoes = () => {
    const somar = (a:number,b:number):number =>{
      return a + b;
    }
    return (
        <>
           <h3>Funções</h3>
           <span>O resultado é: {somar(10,5)}</span>
        </>
    )
}
