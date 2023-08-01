import React, { useState } from 'react'
import { Timer } from './Timer'

const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState<number>(1000)

  return (
    <div>

        <button className='btn btn-primary'
        onClick={()=>setMilisegundos(1000)}>
        1000
        </button>
        <button className='btn btn-primary'
        onClick={()=>setMilisegundos(2000)}>
        2000
        </button>
      <Timer milisegundos={milisegundos}/>
    </div>
  )
}

export default TimerPadre
