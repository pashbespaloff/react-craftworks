import React, {useState} from 'react';
import {addTodo} from './api';
import style from './TodoEffect.module.css';

export default function TodoInput({setTodos}) {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const add = async() => {
    if (todo) {
      setIsLoading(true);
      const response = await addTodo(todo);
      if (response.addStatus) setTodos(prev => [...prev, response.newTodo]);
      setTodo("");
      setIsLoading(false);
    } else {
      console.log("enter a task");
    }
  };

  return (
    <div className={style.add}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button 
        disabled={isLoading}
        onClick={add}
      >
        add
      </button>
    </div>
  )
};