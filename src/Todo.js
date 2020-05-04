import React from 'react';


export default function Todo( {todo} ){
    function handelTodoClick(todo, toggleTodos){
       console.log(todo.name);
    }
    return(
        <div>
           <label>
           <input type="checkbox" defaultChecked={todo.complete} onChange={handelTodoClick}/>
{todo.name}/{todo.id}
               
           </label>
        </div>
    )
}