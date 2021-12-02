import React from 'react'
import {ITodo} from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle: (id:number) => void
    onRemove: (id:number) => void
}

export const TodoList:React.FC<TodoListProps> = ({
         todos,
         onRemove,
         onToggle
    }) => {
        if (todos.length === 0) {
            return <p className="center">Ничего нет</p>
    }

    return(
        <ul>
            {todos.map(todo => {
                let classes = ['todo']
                if (todo.completed){
                    classes.push('completed')
                } else {
                    classes = ['todo']
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className="material-icons  red-text"
                                onClick={()=>onRemove(todo.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}