import React from 'react';
import style from "./Debounced.module.css";
import Loader from '../../../ui/Loader';

export default function MenuItem({dish, cook, stopCooking}) {
  return (
    <>
      <button 
        className={style.dish}
        onClick={() => cook(dish.id)}
      >
        {dish.title}
      </button>

      {
        dish.isCooking && 
        <>
          <Loader />
          <button 
            className={style.dish}
            onClick={() => stopCooking(dish.id)}
          >
            cancel
          </button>
        </>
      }
    </>
  )
};