import React from 'react';

export default function EditPanel({task, dispatch, isEditing, setIsEditing, title}) {
  const save = () => {
    dispatch({type: "renamed", payload: {id: task.id, title: title}});
    setIsEditing(false);
  };

  return (
    <>
      {
        isEditing
          ? <button onClick={save}>save</button>
          : <button onClick={() => setIsEditing(true)}>edit</button>
      }
      <button 
        onClick={() => dispatch({
          type: "deleted", 
          payload: {taskId: task.id}
          })
        }>x</button>
    </>
  )
};