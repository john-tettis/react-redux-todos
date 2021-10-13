import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const INITIAL={
  todos:[],
  formData:{
    text:''
  }
}
const reducer = (state=INITIAL, action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return {...state, todos:[...state.todos,action.payload.todo]}
    case 'DELETE_TODO':
      let newTodos = state.todos.filter(todo=>todo.id!==action.payload.id)
      return{...state, todos:newTodos}
    case 'CHANGE_IS_COMPLETED':
      let temp = state.todos.find(todo=>todo.id===action.payload.id)
      temp.isCompleted=action.payload.isCompleted
      let changedTodos = state.todos.filter(todo=>todo.id!==action.payload.id)
      changedTodos.push(temp)
      return {...state,todos:changedTodos}
    case 'UPDATE_FORM':
      return {...state, formData:{...state.formdata,[action.payload.key]:action.payload.value}}
    case 'RESET_FORM':
      console.log('RESETTING')
      return{...state,formData:INITIAL.formData}
    default:
      return state
  }

}
const store = createStore(reducer)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

