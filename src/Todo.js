const Todo = (props) => {

    const deleteTodo = () => {
        const { todo, deleteTodo } = props
        deleteTodo(todo.id)
    }

    const mark = () => {
        const { todo, markTodo } = props
        markTodo(todo.id)
    }

    return (
        <div className='flex justify-between items-center w-[90vw] lg:w-[40vw] my-4'>
            <div className='text-2xl font-bold'>{props.todo.text}</div>
            <div>
                <button className='bg-green-600 text-white text-2xl font-bold px-4 py-1 mx-2 rounded-lg' onClick={() => mark()}>{props.todo.isCompleted ? 'Undo' : 'Finish'}</button>
                <button className='bg-red-600 text-white text-2xl font-bold px-4 mx-2 py-1 rounded-lg' onClick={() => deleteTodo()}>Delete</button>
            </div>
        </div>
    )
}

export default Todo