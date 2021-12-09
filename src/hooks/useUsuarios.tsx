import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [users, setUsers] = useState<User[]>([])
const pageRef = useRef(1);
    useEffect(() => {
      loadUsers()
    }, [])

    const loadUsers = async ()=>{
        const resp = await reqResApi.get<ReqResList>('/users',{
            params:{
                page:pageRef.current
            }
        })
        

        if(resp.data.data.length >0){
            setUsers(resp.data.data);
        }else{
            pageRef.current = 3;
            setUsers(resp.data.data)
        }
       
    }

    const renderItem= ({id,avatar,first_name,last_name,email}:User)=>{
        return (
            <tr key={id.toString()}>
                <td>
                    <img 
                    src={avatar} 
                    alt={first_name} 
                    style={{width:35,borderRadius:'50%'}} />
                </td>
                <td>{`${first_name} ${last_name}`}</td>
                <td>{email}</td>
            </tr>
        )
    }
    const nextPage = ()=>{
        pageRef.current++;
        loadUsers();
    }

    const prevPage = ()=>{
        if(pageRef.current>1){
            pageRef.current--;
            loadUsers();
        }
    }
    return {
        renderItem,
        users,
        prevPage,
        nextPage
    }
}
