import React, {useContext} from 'react';
import {BackgroundContext} from './backgroundContext';
import style from "./Context.module.css";

export default function ContextBackgroundSwitch() {
  const {background, setBackground} = useContext(BackgroundContext);
  const changeBackground = () => {
    setBackground(background === "wheat" ? "corn" : "wheat");
  };

  return (
    <>
      <label className={style.switch}>
        <input 
          type="checkbox"
          checked={background === "corn"}
          onChange={changeBackground}
        />
        <span className={style.slider}></span>
      </label>

      <div className={style.textbox}>
        <p>background style: {background === "wheat" ? "🌾" : "🌽"}</p>
        <p>click to change it to: {background === "wheat" ? "🌽" : "🌾"}</p>
      </div>
    </>
  )
};