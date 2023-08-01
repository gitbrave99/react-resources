/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContadorRed } from "./assets/components/ContadorRed"
import { Formulario } from "./assets/components/Formulario"
import { Formulario2 } from "./assets/components/Formulario2"
import TimerPadre from "./assets/components/TimerPadre"
import { Todo } from "./assets/todo/Todo"

 


function App() {
 
  return (
    <>
    {/* <TimerPadre/> */}
    {/* <ContadorRed/> */}
    {/* <Formulario2/> */}
    <div className="container">

    <Todo/>
    </div>
    </>
  )
}

export default App
