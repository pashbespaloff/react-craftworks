import React from 'react';
import style from "./Chat.module.css";

export default function Switcher({children, onChange}) {
  return (
    <label className={style.switchbox}>
      <input className={style.checkbox} type="checkbox" onChange={onChange} />
      {children}
    </label>
  )
};