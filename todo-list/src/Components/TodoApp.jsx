import React,{useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp(){
    const[todos,setTodos] = useState([]);

    const addTodo =(text)=>{
        const newTodos = [...todos,{ text,completed: false }];
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
   };

   const removeTodo =(index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
   };

   return(
    <div>
        <TodoForm addTodo = {addTodo} />
        <TodoList todos ={todos} toggleTodo ={toggleTodo} removeTodo={removeTodo} />
    </div>
   );
}

export default TodoApp;