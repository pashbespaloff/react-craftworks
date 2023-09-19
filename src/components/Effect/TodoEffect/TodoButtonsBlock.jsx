import React from 'react';
import {deleteTodo} from './api';

export default function TodoButtonsBlock({
  todoId, setTodos, 
  isEditing, setIsEditing, 
  isLoading, setIsLoading, 
  save
}) {
  
  const removeTodo = async() => {
    setIsLoading(true);
    const response = await deleteTodo(todoId);
    if (response.deleteStatus) {
      setTodos(prev => prev.filter(t => t.id !== todoId));
      setIsLoading(false);
    };
  };

  return (
    <>
      {
        isEditing
          ? <button onClick={save} disabled={isLoading}>
              save  
            </button>
          : <button onClick={() => setIsEditing(true)} disabled={isLoading}>
              edit
            </button>
      }
      <button onClick={() => removeTodo(todoId)} disabled={isLoading}>
        x
      </button>
    </>
  )
};