import { useState } from "react";

export const useForm = <T extends Object>(form:T) => {
    const [state,setForm] = useState(form)

    const onChange = (value:string,field:string)=>{
        setForm({
            ...state,
            [field]:value,
            
        });
    }
    return {

        ...state,
        state,
        onChange
    }
}
