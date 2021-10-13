import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import Todo from './Todo'

const TodoList =()=>{
    let todos = useSelector(state=>state.todos)
    let completed= todos.filter(t=>t.isCompleted)
    let incompleted= todos.filter(t=>!t.isCompleted)
    return(
        <div className='todo-list'>
            <h3>Todos:</h3>
            <div className='todo-list-container'>
                {incompleted.map(t=><Todo key={t.id} data={t}/>)}
            </div>
            <h3>Finished Todos:</h3>
            <div className='todo-list-container'>
                {completed.map(t=><Todo key={t.id} data={t}/>)}
            </div>
            
        </div>
    )




}

export default TodoList