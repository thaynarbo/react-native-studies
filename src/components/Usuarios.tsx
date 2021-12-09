import { useEffect } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResList } from '../interfaces/reqRes';

export const Usuarios = () => {
    useEffect(() => {
       reqResApi.get<ReqResList>('/users')
       .then(resp=>{
           console.log(resp.data.data)
       })
       .catch(console.log)
    }, [])
    return (
        <>
           <h3>Usuarios</h3> 
        </>
    )
}
