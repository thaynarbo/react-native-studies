interface Person {
    fullName:string;
    age:number;
    location:Direction;
}

interface Direction{
    country:string;
    houseNo:number;
}

export const ObjetosLiterais = () => {
    
    const person: Person ={
        fullName:'Thaynar',
        age:25,
        location:{
            country:'Brasil',
            houseNo:340
        }
    }
    
    return (
        <>
        <h3>Objetos Literais</h3>
        <code>
            <pre>
                {JSON.stringify(person,null,2)}
            </pre>
        </code>
            
        </>
    )
}
