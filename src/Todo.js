import React from 'react';
import { useDispatch } from 'react-redux';


const Todo=({data})=>{
    let dispatch= useDispatch();
    let changeCompleted = (bool)=>{
        let action={
            type:'CHANGE_IS_COMPLETED', 
            payload:{
                id:data.id,
                isCompleted:bool
            }
        }
        dispatch(action)
    }
    let deleteTodo=()=>{
        dispatch({type:"DELETE_TODO", payload:{id:data.id}})
    }

    return(
    <div className='todo'>
        <p className='todo-text'>{data.text}</p>
        <div className='todo-container'>
            {data.isCompleted ? <button onClick={()=>changeCompleted(false)} className='button button-success disabled'>Completed</button>:
                            <button onClick={()=>changeCompleted(true)} className='button button-success'>Complete</button>}
            <button className='button button-danger' onClick={deleteTodo}>Delete Todo</button>

        </div>
       


    </div>)

}
export default Todo