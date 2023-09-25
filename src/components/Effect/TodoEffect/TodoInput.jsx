import React, {useState} from 'react';
import {addTodo} from './api';
import style from './TodoEffect.module.css';

export default function TodoInput({setTodos}) {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const add = async() => {
    try {
      if (todo) {
        setIsLoading(true);
        const response = await addTodo(todo);
        response.addStatus && setTodos(prev => [...prev, response.newTodo]);
        setTodo("");
      } else {
        console.log("enter a task");
      };

    } catch (error) {
      return {error};
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className={style.add}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button disabled={isLoading} onClick={add}>
        add
      </button>
    </div>
  )
};