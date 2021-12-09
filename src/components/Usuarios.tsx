import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {
const {users,prevPage,nextPage,renderItem} = useUsuarios();
    return (
        <>
           <h3>Usuarios:</h3> 
           <table className='table'>
               <thead>
                   <tr>
                       <th>Avatar</th>
                       <th>Nome</th>
                       <th>Email</th>
                   </tr>
               </thead>
               <tbody>
                   {users.map(renderItem)}
               </tbody>
           </table>
           <button className='btn btn-primary' onClick={prevPage}>
               Anterior
           </button>
           &nbsp;
           <button className='btn btn-primary' onClick={nextPage}>
               Próxima
           </button>
        </>
    )
}
