import React, {useState, useEffect} from 'react';
import {getTodos} from './api';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Loader from '../../../ui/Loader';
import style from './TodoEffect.module.css';

export default function TodoEffect() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async() => {
      try {
        const data = await getTodos();
        data && setTodos(data);
      } catch (error) {
        console.log("error: ", error.message);
        return {error};
      } finally {
        setIsLoading(false);
      };
    })();

    return () => setIsLoading(true);
  }, []);
  
  return (
    <div className={style.todo}>
    {
      isLoading ? (
        <>
          <br /> 
          <div className={style.loaderbox}><Loader /></div>
        </>
      ) : (
        <>
          <TodoInput setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </>
      )
    }
    </div>
  );
};