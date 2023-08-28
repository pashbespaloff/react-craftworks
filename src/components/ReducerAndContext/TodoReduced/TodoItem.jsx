import React, {useState} from 'react';
import TodoTitle from './TodoTitle';
import TodoButtonsBlock from './TodoButtonsBlock';

export default function TodoItem({task, dispatch}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <li key={task.id}>
      <input 
        id={task.id}
        type="checkbox"
        checked={task.done} 
        onChange={() => dispatch({
          type: "doneChanged", 
          payload: {taskId: task.id}
          })
        }
      />

      <TodoTitle 
        title={title} 
        isEditing={isEditing} 
        setTitle={setTitle}
      />
      
      <TodoButtonsBlock 
        task={task} 
        dispatch={dispatch}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        title={title}
      />
    </li>
  )
};