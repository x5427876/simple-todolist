import { useEffect, useState } from "react";
import "./styles/index.css";
import Todo from "./Todo";

const App = () => {

  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [filter, setFilter] = useState(false)
  const [id, setId] = useState(1)

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, {
      id,
      isCompleted: false,
      text: todoText,
    }])
    setTodoText('')  //重置輸入
    setId(id + 1)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const markTodo = (id) => {
    setTodos(todos.map(
      todo => {
        if (todo.id !== id) {
          return todo
        }
        return {
          ...todo, isCompleted: !todo.isCompleted
        }
      }
    ))
  }



  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1 className='font-bold text-4xl my-8'>Simple TodoList</h1>
      <div className='border-b-2 pb-0 border-gray-900 w-[90%] md:w-[50%]'>
        <div className='flex items-center justify-center'>
          <input className='text-5xl w-1/2 md:w-[100%]' value={todoText} onChange={handleChange} />
          <button className='text-white bg-black rounded-md px-4 py-2 font-bold ml-4 text-3xl' onClick={addTodo}>Add</button>
        </div>
        <div className='flex justify-around my-8 text-2xl'>
          <button className='hover:bg-green-500 hover:text-white px-4 rounded-lg font-bold' onClick={() => { setFilter(false) }}>All</button>
          <button className='hover:bg-red-500 hover:text-white px-4 rounded-lg font-bold' onClick={() => { setFilter(true) }}>Finish</button>
        </div>
      </div>
      <div className='mt-8 mx-auto'>
        {todos
          .filter(todo => filter === true ? todo.isCompleted : true)
          .map(todo => (<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}
            markTodo={markTodo} />))}
      </div>
    </div>
  );
};

export default App;
