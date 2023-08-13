import React, {useState} from 'react';
import {time} from '../../helpers/currentDate';
import style from "./Clock.module.css";

export default function Clock() {
  const [color, setColor] = useState("white");
  
  return (
    <>
      <input 
        className={style.input}
        value={color} 
        onChange={(e) => setColor(e.target.value)}
      />
      <div className={style.clock} style={{color: color}}>
        {time}
      </div>
    </>
  )
};