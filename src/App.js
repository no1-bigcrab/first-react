import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [ todos, setTodos ] = useState([]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( todos ) );
  }, [todos])

  function toggleTodos(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos);

  }
  function handelAddTodo(e) {
    const name = todoNameRef.current.value;
    if ( name === '' ) return
    setTodos( prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null;
  }

  return (
      <>
        <TodoList todos={todos} toggleTodo={toggleTodos}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handelAddTodo}> Add to do</button>
        <button> Clear to do</button>
        <div> {todos.filter( todo => !todo.complete ).length } left to do.</div>
      </>
    
  );
}

export default App;
