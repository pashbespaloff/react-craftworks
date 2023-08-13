import React from 'react';
import style from "./Counter.module.css";

export default function CounterSettings({plus, minus, setPlus, setMinus}) {
  
  const changePlus = (value) => setPlus(value > 0 ? Number(value) : 1);
  const changeMinus = (value) => setMinus(value > 0 ? Number(value) : 1);

  return (
    <div className={`${style.innerbox} ${style.countersetter}`}>
      <p>plus counter: </p>
      <input 
        className={style.input} 
        value={plus} 
        onChange={(e) => changePlus(e.target.value)}
      />
      <p>minus counter: </p>
      <input 
        className={style.input} 
        value={minus}
        onChange={(e) => changeMinus(e.target.value)}
      />
    </div>
  );
};