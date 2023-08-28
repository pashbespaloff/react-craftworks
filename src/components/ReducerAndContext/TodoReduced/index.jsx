import React, {useReducer} from 'react';
import {taskReducer} from './taskReducer';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import style from './TodoReduced.module.css';

export default function TodoReduced() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, initialTasks);

  return (
    <div className={style.todo}>
      <TodoInput dispatch={tasksDispatch} />
      <TodoList
        tasks={tasks}
        dispatch={tasksDispatch}
      />
    </div>
  );
};

const initialTasks = [
  { id: 0, title: 'buy some wine', done: true },
  { id: 1, title: 'cook a pasta sauce', done: false },
  { id: 2, title: 'place some charcuterie on plates', done: false },
];