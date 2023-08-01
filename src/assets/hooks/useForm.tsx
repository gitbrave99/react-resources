/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function useForm<T>(initState:T){
export const useForm=<T extends object>(initState:T)=>{
    const [formulario, setFormulario] = useState(initState);

    const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= target;
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

    return {
        formulario,
        handleChange,
        ...formulario
    }

    // para poder retonar todos las propiedades y no realizar a desestructuracion
    // podemos mandar ...formulario
}





























