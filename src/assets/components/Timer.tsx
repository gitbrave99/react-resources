import React, { useEffect,  useRef,  useState } from 'react'

type TimerArgs={
    milisegundos:number    
}

export const Timer = ({milisegundos}:TimerArgs) => {

    const [segundos, setSegundos] = useState<number>(0)
    const ref = useRef<number|undefined>()// siempre es el puntero en memoria
    console.log(milisegundos);
    
    useEffect(() => {
        if (ref.current) {
            clearInterval(ref.current);
          }
        // este se va a seguir dando aunque el componente se destruya x eso usamos el return
        ref.current=setInterval(() => {setSegundos(s=>s+1)}, milisegundos)
        return () => { 

        }
    }, [milisegundos])

    return (
        <div>Timer <small>{segundos}</small></div>
    )
}
