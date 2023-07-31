import React from 'react';
import style from "./Body.module.css";

export default function Body({ children }) {
  return (
    <div className={style.body}>
      <main className={style.main}>
        {children}
      </main>
    </div>
  )
};