import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid} from 'uuid';


const TodoForm = ()=>{


    let formData = useSelector(state=>state.formData)
    let dispatch = useDispatch();


    const handleChange=(e)=>{
        let payload={
            key:e.target.name,
            value:e.target.value
        }
        dispatch({type:'UPDATE_FORM', payload})

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        let payload={
            todo:{
                text:formData.text,
                isCompleted:false,
                id:uuid()
            }
        }
        dispatch({type:'ADD_TODO',payload})
        dispatch({type:'RESET_FORM'})
    }



    return(
        <form onSubmit={onSubmit} className='todo-form'>
            <div className='todo-form-container'>
                <button className=' button button-success todo-form-button'>Add Todo</button>
                <input name='text' value={formData.text} onChange={handleChange}className='todo-form-input'></input>
            </div>
        </form>
    )

}


export default TodoForm;