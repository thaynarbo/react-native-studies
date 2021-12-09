
import { useForm } from "../hooks/useForm"

export const Formulario = () => {
    const {state,email,password,onChange} =useForm({
        email:'thaynarbo@gmail.com',
        password:'178293'
    })
    return (
        <>
            <h3>Formulario</h3>
            <input 
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={({target})=>onChange(target.value,'email')}
            />

            <input 
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={({target})=>onChange(target.value,'password')}
            />

            <code>
                <pre>{ JSON.stringify( state, null, 2 ) }</pre>
            </code>

        </>
    )
}

