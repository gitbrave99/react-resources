import React from 'react'
import { TodoProvider } from './context/TodoProvide'
import { TodoList } from './components/TodoList'
import { Title } from './components/Title'

export const Todo = () => {
    return (
        <TodoProvider>
            <div>
                <Title/>
               <TodoList/>
            </div>
        </TodoProvider>
    )
}
