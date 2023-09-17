import React,{useState} from 'react';

function TodoList() {

    const [todos , setTodos] = useState("");
    const [todo ,setTodo] = useState([]);

    // add functionality

    const handleAddTodo = () => {
        // this is will generate id for todo so we further update or delete the task
        const currentTodo = {
            name:todos,
            id:Math.random(),
        }
       setTodo((oldTodo) => {
        return [...oldTodo,currentTodo];
       })
       console.log(todo);
       setTodos("");
    };
     

    // delete functionality

    const handleDeleteTodo = (value) => {
        const newTodo = todo.filter((task) => task.id !== value);
        setTodo(newTodo);
    };

    const handleInputChange= (e) => {
        setTodos(e.target.value);
    }

  return (
    <div className='Todo'>
        <h1>My To-Do List</h1>

        <div className='Top'>
            <input className='input' type='text' value={todos}
            onChange={handleInputChange} placeholder='Enter  a task' />

            <button className='btn' onClick={handleAddTodo}>ADD</button>
        </div>

        <ul>
            {todo.map ((task,index) => {
                return (
                <li className='task' key={index}>
                    {task.name}
                    <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
                    </li>

)})}
        </ul>
        
    </div>
  )
}

export default TodoList;