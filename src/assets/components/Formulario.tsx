/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'



// const [formulario, setFormulario] = useState({
//     email:'',
//     nombre:''
// });

// const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
//     const {name,value}= target;

//     setFormulario({
//         ...formulario,
//         [name]:value
//     })

// }
interface FormData {
    email: string,
    nombre: string
}
export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'fsdf',
        nombre: 'sdfdfsd'
    });

    const { email,nombre } = formulario;

    return (
        <div className='card d-flex justify-content-center'>
            <form className='form'>
                <div className="md-3">
                    <label htmlFor="form-label">email</label>
                    <input type="email" name='email' className="form-control"
                        onChange={handleChange} 
                        value={email}/>
                    {/* si tomamo el argumenteo a una funcion , se puede obiar el arrowfunction{()=>{}} */}

                </div>
                <div className="md-3">
                    <label htmlFor="form-label">nombre</label>
                    <input type="nombre" name='nombre' className="form-control"
                        onChange={handleChange} 
                        value={nombre}/>
                </div>
                <pre>
                    {JSON.stringify(formulario)}
                </pre>
            </form>
        </div>
    )
}
