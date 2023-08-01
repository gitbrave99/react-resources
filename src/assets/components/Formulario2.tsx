import React from 'react'
import { useForm } from '../hooks/useForm'

export const Formulario2 = () => {

    const {postal,ciudad,handleChange}=useForm({
        postal:'abx',
        ciudad:'otawwa'
    });

    // const {postal, ciudad}=formulario

  return (
    <>
    <div className='card d-flex justify-content-center'>
            <form className='form'>
                <div className="md-3">
                    <label htmlFor="form-label">codigo postal</label>
                    <input type="text" name='postal' className="form-control"
                        onChange={handleChange} 
                        value={postal}/>
                    {/* si tomamo el argumenteo a una funcion , se puede obiar el arrowfunction{()=>{}} */}

                </div>
                <div className="md-3">
                    <label htmlFor="form-label">ciudad</label>
                    <input type="ciudad" name='ciudad' className="form-control"
                        onChange={handleChange} 
                        value={ciudad}/>
                </div>
                <pre>
                    {JSON.stringify(ciudad)}
                </pre>
            </form>
        </div>
    </>
  )
}
