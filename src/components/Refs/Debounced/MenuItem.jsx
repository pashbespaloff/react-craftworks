import React from 'react';
import style from "./Debounced.module.css";

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
          <div className={style.loader}></div> 
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