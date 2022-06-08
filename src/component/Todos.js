import React,{useState,useEffect} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import axios from 'axios'

const Todos =()=>{
    const [todosState, setTodosState] = useState([])
   
    useEffect(()=>{
        const getTodos = async()=> {
            try {
                const res = await axios.get(
                'https://62a044a7a9866630f80a5ae0.mockapi.io/trainning'
                )
                // console.log(res.data)   
                setTodosState(res.data)
            } catch (error) {
               console.log(error.message)
            }
        } 
        getTodos()
    },[])
    // hd cho checkbox
    const markComplete = id =>{
      const newTodo = todosState.map(todo =>{
          if (todo.id ===id) todo.completed=!todo.completed
          return todo
      }) 
      console.log (newTodo)
      setTodosState(newTodo)
    }
    const deleteTodo = async id =>{
        try {
            await axios.delete(`https://62a044a7a9866630f80a5ae0.mockapi.io/trainning/${id}`)
            const newTodos = todosState.filter(todo=>todo.id !== id)
            setTodosState(newTodos)
    
        } catch (error) {
            console.log(error.message)
        }
        const newTodos = todosState.filter(todo=>todo.id !== id)
        setTodosState(newTodos)
    }
    const addTodo = async title =>{
        try {
            const res = await axios.post(
                'https://62a044a7a9866630f80a5ae0.mockapi.io/trainning',{
                    title,
                    completed: false
                }
            )
            const newTodos = [...todosState,res.data]
            setTodosState(newTodos)
        } catch (error) {
         console.log(error.message)   
        }
    }
   
    return(
        <div>
            <AddTodo addTodoFunc = {addTodo}/>
            {todosState.map(todo =>{
                return <TodoItem 
                key={todo.id} 
                todoProps={todo} 
                markCompleteFunc={markComplete}
                deleteTodoFunc={deleteTodo}
                />
            })}
        </div>
    )
}
export default Todos