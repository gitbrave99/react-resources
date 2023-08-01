 
import { TodoItem } from './TodoItem'
import { useTodos } from '../hooks/useTodos'

export const TodoList = () => {

    // const { todoState } = useContext(TodoContext)
    // const { todos } = todoState
    
    const {todos}= useTodos()


    return (
        <div>
            <ul>
                {todos.map(item =><TodoItem key={item.id} todo={item}/>)}

            </ul>
        </div>
    )
}
