import React, { useState } from 'react';
import style from './PackingList.module.css';

export default function AddItem({onAddItem}) {
  const [value, setValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    (value) && onAddItem(value);
    setValue("");
  };

  return (
    <form className={style.innerbox} onSubmit={(e) => handleForm(e)}>
      <input className={style.input} value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className={style.button}>↓</button>
    </form>
  )
};