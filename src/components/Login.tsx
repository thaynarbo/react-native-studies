import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nome: string;
}

const initialState: AuthState = {
    validando: false,
    token: null,
    username: "",
    nome: "",
};

type loginPayload = {
    username: string;
    nome: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: loginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "logout":
            return {
                validando: false,
                token: null,
                nome: "",
                username: "",
            };
            break;
        case "login":
            const { nome, username } = action.payload;
            return {
                validando: false,
                token: "AB23",
                nome,
                username,
            };

        default:
            return state;
    }
};

export const Login = () => {
    const [{ validando, token, username }, dispatch] = useReducer(
        authReducer,
        initialState
    );
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch({ type: "logout" });
    //     }, 1500);
    // }, []);

    const login = () => {
        dispatch({
            type: "login",
            payload: {
                nome: "Thaynar",
                username: "Thay",
            },
        });
    };

    const logout = () => {
        dispatch({
            type: "logout",
        });
    };
    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        );
    }
    return (
        <>
            <h3>Login</h3>
            {/* <div className="alert alert-info">Validando</div> */}
            {token ? (
                <div className="alert alert-success">
                    Autenticado como {username}
                </div>
            ) : (
                <div className="alert alert-danger">Não está autenticado</div>
            )}

            {token ? (
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            ) : (
                <button className="btn btn-primary" onClick={login}>
                    Login
                </button>
            )}
        </>
    );
};
