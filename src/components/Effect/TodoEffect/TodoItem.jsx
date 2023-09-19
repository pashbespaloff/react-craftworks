import React, {useState} from 'react';
import {updateTodo} from './api';
import TodoTitle from './TodoTitle';
import TodoButtonsBlock from './TodoButtonsBlock';

export default function TodoItem({todo, setTodos}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(todo.title);
  const [prevTitle, setPrevTitle] = useState(title);

  const updateLocalState = (id, updTodo) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) return updTodo;
      else return todo;
    }));
  };

  const updateTodoStatus = async(changedTodo) => {
    setIsLoading(true);
    const response = await updateTodo({...changedTodo, completed: !changedTodo.completed});

    try {
      (response.updStatus) && updateLocalState(changedTodo.id, response.updTodo);
    } catch (error) {
      console.log("error: ", error.message);
      return {error};
    } finally {
      setIsLoading(false);
    };
  };

  const updateTodoTitle = async(changedTodo) => {
    setIsLoading(true);
    const response = await updateTodo({...changedTodo, title: title});

    try {
      if (response.updStatus) { 
        setPrevTitle(title);
        updateLocalState(changedTodo.id, response.updTodo);
      } else {
        setTitle(prevTitle);
      };
    } catch (error) {
      console.log("error: ", error.message);
      return {error};
    } finally {
      setIsEditing(false);
      setIsLoading(false);
    };
  };

  return (
    <li key={todo.id}>
      <input 
        id={todo.id}
        type="checkbox"
        checked={todo.completed} 
        disabled={isLoading}
        onChange={() => updateTodoStatus(todo)}
      />

      <TodoTitle 
        title={title} 
        isEditing={isEditing} 
        setTitle={setTitle}
      />
      
      <TodoButtonsBlock 
        todoId={todo.id}
        setTodos={setTodos}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        save={() => updateTodoTitle(todo)}
      />
    </li>
  )
};