import React from 'react';
// import {deleteTodo} from './api';

export default function TodoButtonsBlock({
  isLoading, isEditing, setIsEditing, removeTodo, save
}) {
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
      <button onClick={removeTodo} disabled={isLoading}>
        x
      </button>
    </>
  )
};