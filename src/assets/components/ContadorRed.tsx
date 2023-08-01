/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer } from 'react'
//usereducer
const InitialState = {
    contador: 0
}

type ActionType =
    { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }; //payload se le conoce al argument que viene en la accion



const contadorReducer = (state: typeof InitialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
    return state;
}


export const ContadorRed = () => {
    const [{contador}, dispatch] = useReducer(contadorReducer, InitialState)
    return (
        <div>
            <h2>contador: {contador}</h2>
            <button className="btn btn-primary"
                onClick={() => { dispatch({ type: 'incrementar' }) }}>
                +1
            </button>
            <button className="btn btn-primary"
                onClick={() => { dispatch({ type: 'decrementar' }) }}>
                -1
            </button>
            <button className="btn btn-primary"
                onClick={() => { dispatch({ type: 'custom',payload:10 }) }}>
                10
            </button>
        </div>
    )
}
