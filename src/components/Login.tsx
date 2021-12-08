import { useEffect, useReducer } from "react";

interface AuthState {
    validating:boolean;
    token:string | null;
    username: string;
    name:string;
}

const initialState:AuthState={
    name:'',
    username:'',
    token:null,
    validating:true
}

type loginPayload ={
    username:string;
    name:string;
}

type AuthAction = 
    | {type:'logout'}
    | {type:'login',payload:loginPayload};

const authReducer = (state:AuthState,action:AuthAction):AuthState =>{
    switch (action.type) {
        case 'logout':
            return {
                validating:false,
                name:'',
                username:'',
                token:null,
            }
        
        case 'login':
            const {name,username} = action.payload;
            return {
                name,
                username,
                token:'ABC123',
                validating:false,
            }
        default:
            return state;
    }
}
export const Login = () => {
    const [{validating,name,token}, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
        setTimeout(()=>{
            dispatch({type:'logout'})
        },1500)
    }, [])

    const login = ()=>{
        dispatch({
            type:'login',
            payload:{
                name:'Thaynar',
                username:'Brandão'
            }

        })
    }

    const logout = ()=>{
        dispatch({type:'logout'})
    }


    if(validating){
        return (
            <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
                (token)?(<div className="alert alert-success"> Autenticado como:{name} </div>)
                : <div className="alert alert-danger">Não está autenticado</div>
            }

            {(token)?
                (<button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>)
                :<button className="btn btn-primary" onClick={login}>
                    Login
                </button>
            }
        </>
    )
}
