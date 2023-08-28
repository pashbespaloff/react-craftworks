import React, {useState} from 'react';
import style from './TodoReduced.module.css';

export default function TodoInput({dispatch}) {
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo) {
      dispatch({
        type: "added",  
        payload: {id: crypto.randomUUID(), title: todo}
      }); 
      setTodo("");
    } else {
      console.log("enter a task");
    }
  };

  return (
    <div className={style.add}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={add}>add</button>
    </div>
  )
};