import React, {useState} from 'react';
import style from "./Clock.module.css";

export default function Clock({ time, initColor }) {
  const [color, setColor] = useState(initColor);
  
  return (
    <>
      <input 
        value={color} 
        className={style.input}
        onChange={(e) => setColor(e.target.value)}
      />
      <div style={{color: color}} className={style.clock}>
        {time}
      </div>
    </>
  )
};